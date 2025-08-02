// import { PrismaClient } from '@prisma/client';

// const prismaClientSingleton = () => {
// 	return new PrismaClient();
// };

// declare const globalThis: {
// 	prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// export default prisma;

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
import { PrismaClient } from '@prisma/client';

// Функция для создания нового PrismaClient
const prismaClientSingleton = () => {
	return new PrismaClient();
};

// Расширяем тип глобального объекта для хранения клиента
declare global {
	// eslint-disable-next-line no-var
	var prismaGlobal: PrismaClient | undefined;
}

const prisma = global.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
	global.prismaGlobal = prisma;
}

export default prisma;
