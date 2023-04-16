import { TransferListData, TransferListItem } from "@mantine/core";
import { ServiceType } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

const getNamedType = (type: ServiceType): string => {
  switch (type) {
    case "INTERIOR":
      return "Interior";
    case "EXTERIOR":
      return "Exterior";
    case "OTHER":
      return "Add ons";
  }
};

export const serviceRouter = createTRPCRouter({
  getServices: protectedProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.service.findMany({
      where: {
        isCustom: false,
      },
    });

    const totalServices: TransferListItem[] = data.map((x) => ({
      value: x.id.toString(),
      image: x.icon,
      label: x.name,
      description: x.description,
      group: getNamedType(x.type),
    }));

    const selectedServicesResults = await ctx.prisma.companyServices.findMany({
      where: {
        companyId: ctx.session.user.org,
      },
      include: {
        service: true,
      },
    });

    const selectedServices: TransferListItem[] = selectedServicesResults
      .map((x) => ({
        ...x.service,
      }))
      .map((x) => ({
        value: x.id.toString(),
        image: x.icon,
        label: x.name,
        description: x.description,
        group: getNamedType(x.type),
      }));

    const filteredServices = totalServices.filter((x) => {
      return !selectedServices.some((y) => y.value === x.value);
    });

    const returnList: TransferListData = [filteredServices, selectedServices];
    return returnList;
  }),
  updateServices: protectedProcedure
    .input(
      z.object({
        selected: z.array(z.number()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.companyServices.deleteMany({
          where: {
            companyId: ctx.session.user.org,
          },
        });
        const batch = input.selected.map((x) => ({
          companyId: ctx.session.user.org,
          serviceId: x,
        }));
        await ctx.prisma.companyServices.createMany({
          data: batch,
        });
        return true;
      } catch (error) {
        return false;
      }
    }),
});
