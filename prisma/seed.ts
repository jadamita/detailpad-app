import { PrismaClient, UserRole, UserStatus } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function seedUsers() {
  const user = await prisma.user.create({
    data: {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      role: UserRole.MANAGER,
      status: UserStatus.ACTIVATED,
      passwordHash:
        "$2b$05$0iC99aTwD3Cc3lf1ccvalOPOXNqWVMZkjf6WYfDuaW1aqWAwgODti",
      profile: {
        create: {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
        },
      },
    },
  });

  const company = await prisma.company.create({
    data: {
      name: faker.company.name(),
      userId: user.id,
    },
  });

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      companyId: company.id,
    },
  });

  for (var i = 0; i < 10; i++) {
    const customer = await prisma.customer.create({
      data: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        middleName: "",
        companyId: company.id,
        vehicles: {
          create: {
            make: faker.vehicle.manufacturer(),
            model: faker.vehicle.model(),
            year: Math.floor(Math.random() * 2023) + 2013,
            plate: faker.vehicle.vrm(),
            vin: faker.vehicle.vin(),
            color: faker.vehicle.color(),
          },
        },
      },
    });
  }
}

seedUsers();
