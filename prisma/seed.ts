import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.country.upsert({
    where: { id_country: 1 },
    update: {},
    create: {
      name: 'Guatemala',
      cities: {
        create: [
          {
            name: 'Guatemala',
          },
          {
            name: 'Quetzaltenango',
          },
          {
            name: 'Escuintla',
          },
          {
            name: 'Chiquimula',
          },
          {
            name: 'Jalapa',
          },
          {
            name: 'Jutiapa',
          },
          {
            name: 'Petén',
          },
          {
            name: 'Alta Verapaz',
          },
          {
            name: 'Baja Verapaz',
          },
          {
            name: 'Izabal',
          },
          {
            name: 'Zacapa',
          },
          {
            name: 'Chimaltenango',
          },
          {
            name: 'Sacatepéquez',
          },
          {
            name: 'Santa Rosa',
          },
          {
            name: 'Sololá',
          },
          {
            name: 'Totonicapán',
          },
          {
            name: 'Huehuetenango',
          },
          {
            name: 'Quiché',
          },
          {
            name: 'San Marcos',
          },
          {
            name: 'Retalhuleu',
          },
          {
            name: 'Suchitepéquez',
          },
          {
            name: 'El Progreso',
          },
        ],
      },
    },
  });

  await prisma.gender.upsert({
    where: { id_gender: 1 },
    update: {},
    create: {
      name: 'Male',
    },
  });

  await prisma.gender.upsert({
    where: { id_gender: 2 },
    update: {},
    create: {
      name: 'Female',
    },
  });

  await prisma.marital_Status.upsert({
    where: { id_marital_status: 1 },
    update: {},
    create: {
      name: 'Single',
    },
  });

  await prisma.marital_Status.upsert({
    where: { id_marital_status: 2 },
    update: {},
    create: {
      name: 'Married',
    },
  });

  await prisma.marital_Status.upsert({
    where: { id_marital_status: 3 },
    update: {},
    create: {
      name: 'Divorced',
    },
  });

  await prisma.marital_Status.upsert({
    where: { id_marital_status: 4 },
    update: {},
    create: {
      name: 'Widowed',
    },
  });

  await prisma.marital_Status.upsert({
    where: { id_marital_status: 5 },
    update: {},
    create: {
      name: 'United',
    },
  });

  await prisma.work_Schedule.upsert({
    where: { id_work_schedule: 1 },
    update: {},
    create: {
      name: 'Full Time',
    },
  });

  await prisma.work_Schedule.upsert({
    where: { id_work_schedule: 2 },
    update: {},
    create: {
      name: 'Part Time',
    },
  });

  await prisma.work_Schedule.upsert({
    where: { id_work_schedule: 3 },
    update: {},
    create: {
      name: 'Per Hour',
    },
  });

  await prisma.work_Schedule.upsert({
    where: { id_work_schedule: 4 },
    update: {},
    create: {
      name: 'Per Day',
    },
  });

  await prisma.work_Schedule.upsert({
    where: { id_work_schedule: 5 },
    update: {},
    create: {
      name: 'Full Time Hosted',
    },
  });

  await prisma.applicant_Status.upsert({
    where: { id_applicant_status: 1 },
    update: {},
    create: {
      name: 'Active',
    },
  });

  await prisma.applicant_Status.upsert({
    where: { id_applicant_status: 2 },
    update: {},
    create: {
      name: 'Pending',
    },
  });

  await prisma.applicant_Status.upsert({
    where: { id_applicant_status: 3 },
    update: {},
    create: {
      name: 'Accepted',
    },
  });

  await prisma.applicant_Status.upsert({
    where: { id_applicant_status: 4 },
    update: {},
    create: {
      name: 'Rejected',
    },
  });

  console.log('Seed complete');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
