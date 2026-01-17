
import { AcademicDataService } from './src/academic/academic-data.service';

const service = new AcademicDataService();
console.log('Properties on AcademicDataService instance:');
console.log(Object.getOwnPropertyNames(service));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(service)));

// Also check the PrismaClient Prototype
import { PrismaClient } from './src/generated/client-academic';
const client = new PrismaClient();
console.log('Properties on PrismaClient prototype:');
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(client)));
