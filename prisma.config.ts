import { defineConfig, env } from '@prisma/config';
import 'dotenv/config'; 

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // For CLI operations like migrations and studio, 
    // it is safer to use DIRECT_URL (Port 5432)
    url: env('DATABASE_URL'),
    shadowDatabaseUrl:env('DIRECT_URL'),
  },
});