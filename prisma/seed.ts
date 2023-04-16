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

// interface Service {
//   name: string;
//   description: string;
//   type: ServiceType;
// }

// const services = [
//   {
//     name: "Hand Wash",
//     description:
//       "A basic hand wash service that includes a thorough cleaning of the exterior of the vehicle using high-quality soap and water.",
//     type: ServiceType.EXTERIOR,
//   },
//   {
//     name: "Clay Bar Treatment",
//     description:
//       "A process that uses a clay bar to remove contaminants and debris from the vehicle's paint and leaves it feeling smooth and glossy.",
//     type: ServiceType.EXTERIOR,
//   },
//   {
//     name: "Paint Correction",
//     description:
//       "A process that involves removing swirl marks, scratches, and other imperfections from the vehicle's paint using specialized equipment and products.",
//     type: ServiceType.EXTERIOR,
//   },
//   {
//     name: "Waxing/Sealing",
//     description:
//       "A process that adds a layer of protection to the vehicle's paint and enhances its shine and color.",
//     type: ServiceType.EXTERIOR,
//   },
//   {
//     name: "Headlight Restoration",
//     description:
//       "A process that restores the clarity of cloudy or yellowed headlights to improve visibility and appearance.",
//     type: ServiceType.EXTERIOR,
//   },
//   {
//     name: "Rim and Tire Cleaning",
//     description:
//       "A thorough cleaning of the rims and tires to remove brake dust, grime, and other debris.",
//     type: ServiceType.EXTERIOR,
//   },
//   {
//     name: "Undercarriage Cleaning",
//     description:
//       "A cleaning of the underside of the vehicle to remove dirt, debris, and other contaminants.",
//     type: ServiceType.EXTERIOR,
//   },
//   {
//     name: "Vacuuming",
//     description:
//       "A thorough vacuuming of the interior of the vehicle to remove dirt, debris, and pet hair.",
//     type: ServiceType.INTERIOR,
//   },
//   {
//     name: "Upholstery Cleaning",
//     description:
//       "A cleaning of the vehicle's seats, carpets, and other upholstery using specialized equipment and products.",
//     type: ServiceType.INTERIOR,
//   },
//   {
//     name: "Leather Cleaning and Conditioning",
//     description:
//       "A cleaning and conditioning of the vehicle's leather seats to keep them soft and supple.",
//     type: ServiceType.INTERIOR,
//   },
//   {
//     name: "Dashboard and Console Cleaning",
//     description:
//       "A cleaning of the vehicle's dashboard, console, and other interior surfaces to remove dust and dirt.",
//     type: ServiceType.INTERIOR,
//   },
//   {
//     name: "Window and Mirror Cleaning",
//     description:
//       "A cleaning of the vehicle's windows and mirrors to remove streaks, smudges, and other debris.",
//     type: ServiceType.INTERIOR,
//   },
// ];

// async function seedServices() {
//   for (var service of services) {
//     await prisma.service.create({
//       data: {
//         name: service.name,
//         description: service.description,
//         type: service.type,
//       },
//     });
//   }
// }
// seedServices();
// seedUsers();
