import { prisma } from './../src/lib/prisma';

async function seed(){
  await prisma.event.create({
    data: {
      id: '613e11e2-c0cc-46d0-98ee-ee5e45996931',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um enveto p/ devs apaixonado(as) por código',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  
  console.log('database seeded!')
  prisma.$disconnect()
})