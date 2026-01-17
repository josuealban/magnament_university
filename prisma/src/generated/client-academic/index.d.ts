
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Specialty
 * 
 */
export type Specialty = $Result.DefaultSelection<Prisma.$SpecialtyPayload>
/**
 * Model Career
 * 
 */
export type Career = $Result.DefaultSelection<Prisma.$CareerPayload>
/**
 * Model Cycle
 * 
 */
export type Cycle = $Result.DefaultSelection<Prisma.$CyclePayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model TeacherSubject
 * 
 */
export type TeacherSubject = $Result.DefaultSelection<Prisma.$TeacherSubjectPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model StudentSubject
 * 
 */
export type StudentSubject = $Result.DefaultSelection<Prisma.$StudentSubjectPayload>
/**
 * Model AcademicPeriod
 * 
 */
export type AcademicPeriod = $Result.DefaultSelection<Prisma.$AcademicPeriodPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EmploymentType: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  HOURLY: 'HOURLY'
};

export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType]

}

export type EmploymentType = $Enums.EmploymentType

export const EmploymentType: typeof $Enums.EmploymentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Specialties
 * const specialties = await prisma.specialty.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Specialties
   * const specialties = await prisma.specialty.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.specialty`: Exposes CRUD operations for the **Specialty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialties
    * const specialties = await prisma.specialty.findMany()
    * ```
    */
  get specialty(): Prisma.SpecialtyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **Career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.CareerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cycle`: Exposes CRUD operations for the **Cycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cycles
    * const cycles = await prisma.cycle.findMany()
    * ```
    */
  get cycle(): Prisma.CycleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherSubject`: Exposes CRUD operations for the **TeacherSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherSubjects
    * const teacherSubjects = await prisma.teacherSubject.findMany()
    * ```
    */
  get teacherSubject(): Prisma.TeacherSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentSubject`: Exposes CRUD operations for the **StudentSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentSubjects
    * const studentSubjects = await prisma.studentSubject.findMany()
    * ```
    */
  get studentSubject(): Prisma.StudentSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.academicPeriod`: Exposes CRUD operations for the **AcademicPeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicPeriods
    * const academicPeriods = await prisma.academicPeriod.findMany()
    * ```
    */
  get academicPeriod(): Prisma.AcademicPeriodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Specialty: 'Specialty',
    Career: 'Career',
    Cycle: 'Cycle',
    Subject: 'Subject',
    Teacher: 'Teacher',
    TeacherSubject: 'TeacherSubject',
    Student: 'Student',
    StudentSubject: 'StudentSubject',
    AcademicPeriod: 'AcademicPeriod',
    Enrollment: 'Enrollment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "specialty" | "career" | "cycle" | "subject" | "teacher" | "teacherSubject" | "student" | "studentSubject" | "academicPeriod" | "enrollment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Specialty: {
        payload: Prisma.$SpecialtyPayload<ExtArgs>
        fields: Prisma.SpecialtyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialtyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialtyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          findFirst: {
            args: Prisma.SpecialtyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialtyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          findMany: {
            args: Prisma.SpecialtyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          create: {
            args: Prisma.SpecialtyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          createMany: {
            args: Prisma.SpecialtyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialtyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          delete: {
            args: Prisma.SpecialtyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          update: {
            args: Prisma.SpecialtyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          deleteMany: {
            args: Prisma.SpecialtyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialtyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialtyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          upsert: {
            args: Prisma.SpecialtyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          aggregate: {
            args: Prisma.SpecialtyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialty>
          }
          groupBy: {
            args: Prisma.SpecialtyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialtyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialtyCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialtyCountAggregateOutputType> | number
          }
        }
      }
      Career: {
        payload: Prisma.$CareerPayload<ExtArgs>
        fields: Prisma.CareerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findFirst: {
            args: Prisma.CareerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findMany: {
            args: Prisma.CareerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          create: {
            args: Prisma.CareerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          createMany: {
            args: Prisma.CareerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          delete: {
            args: Prisma.CareerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          update: {
            args: Prisma.CareerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          deleteMany: {
            args: Prisma.CareerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          upsert: {
            args: Prisma.CareerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          aggregate: {
            args: Prisma.CareerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareer>
          }
          groupBy: {
            args: Prisma.CareerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerCountArgs<ExtArgs>
            result: $Utils.Optional<CareerCountAggregateOutputType> | number
          }
        }
      }
      Cycle: {
        payload: Prisma.$CyclePayload<ExtArgs>
        fields: Prisma.CycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CycleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CycleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          findFirst: {
            args: Prisma.CycleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CycleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          findMany: {
            args: Prisma.CycleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>[]
          }
          create: {
            args: Prisma.CycleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          createMany: {
            args: Prisma.CycleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CycleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>[]
          }
          delete: {
            args: Prisma.CycleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          update: {
            args: Prisma.CycleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          deleteMany: {
            args: Prisma.CycleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CycleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CycleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>[]
          }
          upsert: {
            args: Prisma.CycleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          aggregate: {
            args: Prisma.CycleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCycle>
          }
          groupBy: {
            args: Prisma.CycleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CycleCountArgs<ExtArgs>
            result: $Utils.Optional<CycleCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      TeacherSubject: {
        payload: Prisma.$TeacherSubjectPayload<ExtArgs>
        fields: Prisma.TeacherSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          findFirst: {
            args: Prisma.TeacherSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          findMany: {
            args: Prisma.TeacherSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          create: {
            args: Prisma.TeacherSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          createMany: {
            args: Prisma.TeacherSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          delete: {
            args: Prisma.TeacherSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          update: {
            args: Prisma.TeacherSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          deleteMany: {
            args: Prisma.TeacherSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          upsert: {
            args: Prisma.TeacherSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          aggregate: {
            args: Prisma.TeacherSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherSubject>
          }
          groupBy: {
            args: Prisma.TeacherSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherSubjectCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      StudentSubject: {
        payload: Prisma.$StudentSubjectPayload<ExtArgs>
        fields: Prisma.StudentSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          findFirst: {
            args: Prisma.StudentSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          findMany: {
            args: Prisma.StudentSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          create: {
            args: Prisma.StudentSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          createMany: {
            args: Prisma.StudentSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          delete: {
            args: Prisma.StudentSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          update: {
            args: Prisma.StudentSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          deleteMany: {
            args: Prisma.StudentSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          upsert: {
            args: Prisma.StudentSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          aggregate: {
            args: Prisma.StudentSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentSubject>
          }
          groupBy: {
            args: Prisma.StudentSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<StudentSubjectCountAggregateOutputType> | number
          }
        }
      }
      AcademicPeriod: {
        payload: Prisma.$AcademicPeriodPayload<ExtArgs>
        fields: Prisma.AcademicPeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicPeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicPeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload>
          }
          findFirst: {
            args: Prisma.AcademicPeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicPeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload>
          }
          findMany: {
            args: Prisma.AcademicPeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload>[]
          }
          create: {
            args: Prisma.AcademicPeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload>
          }
          createMany: {
            args: Prisma.AcademicPeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcademicPeriodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload>[]
          }
          delete: {
            args: Prisma.AcademicPeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload>
          }
          update: {
            args: Prisma.AcademicPeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload>
          }
          deleteMany: {
            args: Prisma.AcademicPeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicPeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcademicPeriodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload>[]
          }
          upsert: {
            args: Prisma.AcademicPeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicPeriodPayload>
          }
          aggregate: {
            args: Prisma.AcademicPeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicPeriod>
          }
          groupBy: {
            args: Prisma.AcademicPeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicPeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicPeriodCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicPeriodCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    specialty?: SpecialtyOmit
    career?: CareerOmit
    cycle?: CycleOmit
    subject?: SubjectOmit
    teacher?: TeacherOmit
    teacherSubject?: TeacherSubjectOmit
    student?: StudentOmit
    studentSubject?: StudentSubjectOmit
    academicPeriod?: AcademicPeriodOmit
    enrollment?: EnrollmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SpecialtyCountOutputType
   */

  export type SpecialtyCountOutputType = {
    careers: number
  }

  export type SpecialtyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | SpecialtyCountOutputTypeCountCareersArgs
  }

  // Custom InputTypes
  /**
   * SpecialtyCountOutputType without action
   */
  export type SpecialtyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialtyCountOutputType
     */
    select?: SpecialtyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialtyCountOutputType without action
   */
  export type SpecialtyCountOutputTypeCountCareersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
  }


  /**
   * Count Type CareerCountOutputType
   */

  export type CareerCountOutputType = {
    students: number
    subjects: number
  }

  export type CareerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | CareerCountOutputTypeCountStudentsArgs
    subjects?: boolean | CareerCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerCountOutputType
     */
    select?: CareerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }


  /**
   * Count Type CycleCountOutputType
   */

  export type CycleCountOutputType = {
    subjects: number
  }

  export type CycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | CycleCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * CycleCountOutputType without action
   */
  export type CycleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleCountOutputType
     */
    select?: CycleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CycleCountOutputType without action
   */
  export type CycleCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    students: number
    teachers: number
    enrollments: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | SubjectCountOutputTypeCountStudentsArgs
    teachers?: boolean | SubjectCountOutputTypeCountTeachersArgs
    enrollments?: boolean | SubjectCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    subjects: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | TeacherCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    subjects: number
    enrollments: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | StudentCountOutputTypeCountSubjectsArgs
    enrollments?: boolean | StudentCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type AcademicPeriodCountOutputType
   */

  export type AcademicPeriodCountOutputType = {
    enrollments: number
  }

  export type AcademicPeriodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | AcademicPeriodCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * AcademicPeriodCountOutputType without action
   */
  export type AcademicPeriodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriodCountOutputType
     */
    select?: AcademicPeriodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AcademicPeriodCountOutputType without action
   */
  export type AcademicPeriodCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Specialty
   */

  export type AggregateSpecialty = {
    _count: SpecialtyCountAggregateOutputType | null
    _avg: SpecialtyAvgAggregateOutputType | null
    _sum: SpecialtySumAggregateOutputType | null
    _min: SpecialtyMinAggregateOutputType | null
    _max: SpecialtyMaxAggregateOutputType | null
  }

  export type SpecialtyAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecialtySumAggregateOutputType = {
    id: number | null
  }

  export type SpecialtyMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialtyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialtyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpecialtyAvgAggregateInputType = {
    id?: true
  }

  export type SpecialtySumAggregateInputType = {
    id?: true
  }

  export type SpecialtyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialtyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialtyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpecialtyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialty to aggregate.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialties
    **/
    _count?: true | SpecialtyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialtyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialtySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialtyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialtyMaxAggregateInputType
  }

  export type GetSpecialtyAggregateType<T extends SpecialtyAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialty[P]>
      : GetScalarType<T[P], AggregateSpecialty[P]>
  }




  export type SpecialtyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialtyWhereInput
    orderBy?: SpecialtyOrderByWithAggregationInput | SpecialtyOrderByWithAggregationInput[]
    by: SpecialtyScalarFieldEnum[] | SpecialtyScalarFieldEnum
    having?: SpecialtyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialtyCountAggregateInputType | true
    _avg?: SpecialtyAvgAggregateInputType
    _sum?: SpecialtySumAggregateInputType
    _min?: SpecialtyMinAggregateInputType
    _max?: SpecialtyMaxAggregateInputType
  }

  export type SpecialtyGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SpecialtyCountAggregateOutputType | null
    _avg: SpecialtyAvgAggregateOutputType | null
    _sum: SpecialtySumAggregateOutputType | null
    _min: SpecialtyMinAggregateOutputType | null
    _max: SpecialtyMaxAggregateOutputType | null
  }

  type GetSpecialtyGroupByPayload<T extends SpecialtyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialtyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialtyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialtyGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialtyGroupByOutputType[P]>
        }
      >
    >


  export type SpecialtySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    careers?: boolean | Specialty$careersArgs<ExtArgs>
    _count?: boolean | SpecialtyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpecialtyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["specialty"]>
  export type SpecialtyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careers?: boolean | Specialty$careersArgs<ExtArgs>
    _count?: boolean | SpecialtyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialtyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialtyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialtyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialty"
    objects: {
      careers: Prisma.$CareerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["specialty"]>
    composites: {}
  }

  type SpecialtyGetPayload<S extends boolean | null | undefined | SpecialtyDefaultArgs> = $Result.GetResult<Prisma.$SpecialtyPayload, S>

  type SpecialtyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialtyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialtyCountAggregateInputType | true
    }

  export interface SpecialtyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialty'], meta: { name: 'Specialty' } }
    /**
     * Find zero or one Specialty that matches the filter.
     * @param {SpecialtyFindUniqueArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialtyFindUniqueArgs>(args: SelectSubset<T, SpecialtyFindUniqueArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialtyFindUniqueOrThrowArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialtyFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialtyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindFirstArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialtyFindFirstArgs>(args?: SelectSubset<T, SpecialtyFindFirstArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindFirstOrThrowArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialtyFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialtyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialties
     * const specialties = await prisma.specialty.findMany()
     * 
     * // Get first 10 Specialties
     * const specialties = await prisma.specialty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialtyWithIdOnly = await prisma.specialty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialtyFindManyArgs>(args?: SelectSubset<T, SpecialtyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialty.
     * @param {SpecialtyCreateArgs} args - Arguments to create a Specialty.
     * @example
     * // Create one Specialty
     * const Specialty = await prisma.specialty.create({
     *   data: {
     *     // ... data to create a Specialty
     *   }
     * })
     * 
     */
    create<T extends SpecialtyCreateArgs>(args: SelectSubset<T, SpecialtyCreateArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialties.
     * @param {SpecialtyCreateManyArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialty = await prisma.specialty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialtyCreateManyArgs>(args?: SelectSubset<T, SpecialtyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialties and returns the data saved in the database.
     * @param {SpecialtyCreateManyAndReturnArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialty = await prisma.specialty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialties and only return the `id`
     * const specialtyWithIdOnly = await prisma.specialty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialtyCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialtyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specialty.
     * @param {SpecialtyDeleteArgs} args - Arguments to delete one Specialty.
     * @example
     * // Delete one Specialty
     * const Specialty = await prisma.specialty.delete({
     *   where: {
     *     // ... filter to delete one Specialty
     *   }
     * })
     * 
     */
    delete<T extends SpecialtyDeleteArgs>(args: SelectSubset<T, SpecialtyDeleteArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialty.
     * @param {SpecialtyUpdateArgs} args - Arguments to update one Specialty.
     * @example
     * // Update one Specialty
     * const specialty = await prisma.specialty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialtyUpdateArgs>(args: SelectSubset<T, SpecialtyUpdateArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialties.
     * @param {SpecialtyDeleteManyArgs} args - Arguments to filter Specialties to delete.
     * @example
     * // Delete a few Specialties
     * const { count } = await prisma.specialty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialtyDeleteManyArgs>(args?: SelectSubset<T, SpecialtyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialties
     * const specialty = await prisma.specialty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialtyUpdateManyArgs>(args: SelectSubset<T, SpecialtyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties and returns the data updated in the database.
     * @param {SpecialtyUpdateManyAndReturnArgs} args - Arguments to update many Specialties.
     * @example
     * // Update many Specialties
     * const specialty = await prisma.specialty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialties and only return the `id`
     * const specialtyWithIdOnly = await prisma.specialty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialtyUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialtyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specialty.
     * @param {SpecialtyUpsertArgs} args - Arguments to update or create a Specialty.
     * @example
     * // Update or create a Specialty
     * const specialty = await prisma.specialty.upsert({
     *   create: {
     *     // ... data to create a Specialty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialty we want to update
     *   }
     * })
     */
    upsert<T extends SpecialtyUpsertArgs>(args: SelectSubset<T, SpecialtyUpsertArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyCountArgs} args - Arguments to filter Specialties to count.
     * @example
     * // Count the number of Specialties
     * const count = await prisma.specialty.count({
     *   where: {
     *     // ... the filter for the Specialties we want to count
     *   }
     * })
    **/
    count<T extends SpecialtyCountArgs>(
      args?: Subset<T, SpecialtyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialtyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialtyAggregateArgs>(args: Subset<T, SpecialtyAggregateArgs>): Prisma.PrismaPromise<GetSpecialtyAggregateType<T>>

    /**
     * Group by Specialty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialtyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialtyGroupByArgs['orderBy'] }
        : { orderBy?: SpecialtyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialtyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialtyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialty model
   */
  readonly fields: SpecialtyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialtyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careers<T extends Specialty$careersArgs<ExtArgs> = {}>(args?: Subset<T, Specialty$careersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Specialty model
   */
  interface SpecialtyFieldRefs {
    readonly id: FieldRef<"Specialty", 'Int'>
    readonly name: FieldRef<"Specialty", 'String'>
    readonly description: FieldRef<"Specialty", 'String'>
    readonly createdAt: FieldRef<"Specialty", 'DateTime'>
    readonly updatedAt: FieldRef<"Specialty", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Specialty findUnique
   */
  export type SpecialtyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty findUniqueOrThrow
   */
  export type SpecialtyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty findFirst
   */
  export type SpecialtyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[]
  }

  /**
   * Specialty findFirstOrThrow
   */
  export type SpecialtyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[]
  }

  /**
   * Specialty findMany
   */
  export type SpecialtyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[]
  }

  /**
   * Specialty create
   */
  export type SpecialtyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialty.
     */
    data: XOR<SpecialtyCreateInput, SpecialtyUncheckedCreateInput>
  }

  /**
   * Specialty createMany
   */
  export type SpecialtyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtyCreateManyInput | SpecialtyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialty createManyAndReturn
   */
  export type SpecialtyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtyCreateManyInput | SpecialtyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialty update
   */
  export type SpecialtyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialty.
     */
    data: XOR<SpecialtyUpdateInput, SpecialtyUncheckedUpdateInput>
    /**
     * Choose, which Specialty to update.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty updateMany
   */
  export type SpecialtyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtyUpdateManyMutationInput, SpecialtyUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtyWhereInput
    /**
     * Limit how many Specialties to update.
     */
    limit?: number
  }

  /**
   * Specialty updateManyAndReturn
   */
  export type SpecialtyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtyUpdateManyMutationInput, SpecialtyUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtyWhereInput
    /**
     * Limit how many Specialties to update.
     */
    limit?: number
  }

  /**
   * Specialty upsert
   */
  export type SpecialtyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialty to update in case it exists.
     */
    where: SpecialtyWhereUniqueInput
    /**
     * In case the Specialty found by the `where` argument doesn't exist, create a new Specialty with this data.
     */
    create: XOR<SpecialtyCreateInput, SpecialtyUncheckedCreateInput>
    /**
     * In case the Specialty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialtyUpdateInput, SpecialtyUncheckedUpdateInput>
  }

  /**
   * Specialty delete
   */
  export type SpecialtyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter which Specialty to delete.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty deleteMany
   */
  export type SpecialtyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialties to delete
     */
    where?: SpecialtyWhereInput
    /**
     * Limit how many Specialties to delete.
     */
    limit?: number
  }

  /**
   * Specialty.careers
   */
  export type Specialty$careersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    cursor?: CareerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Specialty without action
   */
  export type SpecialtyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
  }


  /**
   * Model Career
   */

  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerAvgAggregateOutputType = {
    id: number | null
    totalCycles: number | null
    durationYears: number | null
    specialtyId: number | null
  }

  export type CareerSumAggregateOutputType = {
    id: number | null
    totalCycles: number | null
    durationYears: number | null
    specialtyId: number | null
  }

  export type CareerMinAggregateOutputType = {
    id: number | null
    name: string | null
    totalCycles: number | null
    durationYears: number | null
    specialtyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    totalCycles: number | null
    durationYears: number | null
    specialtyId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerCountAggregateOutputType = {
    id: number
    name: number
    totalCycles: number
    durationYears: number
    specialtyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CareerAvgAggregateInputType = {
    id?: true
    totalCycles?: true
    durationYears?: true
    specialtyId?: true
  }

  export type CareerSumAggregateInputType = {
    id?: true
    totalCycles?: true
    durationYears?: true
    specialtyId?: true
  }

  export type CareerMinAggregateInputType = {
    id?: true
    name?: true
    totalCycles?: true
    durationYears?: true
    specialtyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerMaxAggregateInputType = {
    id?: true
    name?: true
    totalCycles?: true
    durationYears?: true
    specialtyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerCountAggregateInputType = {
    id?: true
    name?: true
    totalCycles?: true
    durationYears?: true
    specialtyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Career to aggregate.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type CareerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithAggregationInput | CareerOrderByWithAggregationInput[]
    by: CareerScalarFieldEnum[] | CareerScalarFieldEnum
    having?: CareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _avg?: CareerAvgAggregateInputType
    _sum?: CareerSumAggregateInputType
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }

  export type CareerGroupByOutputType = {
    id: number
    name: string
    totalCycles: number
    durationYears: number
    specialtyId: number
    createdAt: Date
    updatedAt: Date
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends CareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type CareerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalCycles?: boolean
    durationYears?: boolean
    specialtyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
    students?: boolean | Career$studentsArgs<ExtArgs>
    subjects?: boolean | Career$subjectsArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalCycles?: boolean
    durationYears?: boolean
    specialtyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalCycles?: boolean
    durationYears?: boolean
    specialtyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectScalar = {
    id?: boolean
    name?: boolean
    totalCycles?: boolean
    durationYears?: boolean
    specialtyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CareerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "totalCycles" | "durationYears" | "specialtyId" | "createdAt" | "updatedAt", ExtArgs["result"]["career"]>
  export type CareerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
    students?: boolean | Career$studentsArgs<ExtArgs>
    subjects?: boolean | Career$subjectsArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CareerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
  }
  export type CareerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialty?: boolean | SpecialtyDefaultArgs<ExtArgs>
  }

  export type $CareerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Career"
    objects: {
      specialty: Prisma.$SpecialtyPayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      totalCycles: number
      durationYears: number
      specialtyId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["career"]>
    composites: {}
  }

  type CareerGetPayload<S extends boolean | null | undefined | CareerDefaultArgs> = $Result.GetResult<Prisma.$CareerPayload, S>

  type CareerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerCountAggregateInputType | true
    }

  export interface CareerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Career'], meta: { name: 'Career' } }
    /**
     * Find zero or one Career that matches the filter.
     * @param {CareerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerFindUniqueArgs>(args: SelectSubset<T, CareerFindUniqueArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Career that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerFindFirstArgs>(args?: SelectSubset<T, CareerFindFirstArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerWithIdOnly = await prisma.career.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareerFindManyArgs>(args?: SelectSubset<T, CareerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Career.
     * @param {CareerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
     */
    create<T extends CareerCreateArgs>(args: SelectSubset<T, CareerCreateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Careers.
     * @param {CareerCreateManyArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerCreateManyArgs>(args?: SelectSubset<T, CareerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Careers and returns the data saved in the database.
     * @param {CareerCreateManyAndReturnArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Career.
     * @param {CareerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
     */
    delete<T extends CareerDeleteArgs>(args: SelectSubset<T, CareerDeleteArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Career.
     * @param {CareerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerUpdateArgs>(args: SelectSubset<T, CareerUpdateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Careers.
     * @param {CareerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerDeleteManyArgs>(args?: SelectSubset<T, CareerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerUpdateManyArgs>(args: SelectSubset<T, CareerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers and returns the data updated in the database.
     * @param {CareerUpdateManyAndReturnArgs} args - Arguments to update many Careers.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareerUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Career.
     * @param {CareerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
     */
    upsert<T extends CareerUpsertArgs>(args: SelectSubset<T, CareerUpsertArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends CareerCountArgs>(
      args?: Subset<T, CareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): Prisma.PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerGroupByArgs['orderBy'] }
        : { orderBy?: CareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Career model
   */
  readonly fields: CareerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialty<T extends SpecialtyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialtyDefaultArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Career$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Career$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjects<T extends Career$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Career$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Career model
   */
  interface CareerFieldRefs {
    readonly id: FieldRef<"Career", 'Int'>
    readonly name: FieldRef<"Career", 'String'>
    readonly totalCycles: FieldRef<"Career", 'Int'>
    readonly durationYears: FieldRef<"Career", 'Int'>
    readonly specialtyId: FieldRef<"Career", 'Int'>
    readonly createdAt: FieldRef<"Career", 'DateTime'>
    readonly updatedAt: FieldRef<"Career", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Career findUnique
   */
  export type CareerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findUniqueOrThrow
   */
  export type CareerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findFirst
   */
  export type CareerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findFirstOrThrow
   */
  export type CareerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findMany
   */
  export type CareerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career create
   */
  export type CareerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to create a Career.
     */
    data: XOR<CareerCreateInput, CareerUncheckedCreateInput>
  }

  /**
   * Career createMany
   */
  export type CareerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career createManyAndReturn
   */
  export type CareerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Career update
   */
  export type CareerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to update a Career.
     */
    data: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
    /**
     * Choose, which Career to update.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career updateMany
   */
  export type CareerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career updateManyAndReturn
   */
  export type CareerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Career upsert
   */
  export type CareerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The filter to search for the Career to update in case it exists.
     */
    where: CareerWhereUniqueInput
    /**
     * In case the Career found by the `where` argument doesn't exist, create a new Career with this data.
     */
    create: XOR<CareerCreateInput, CareerUncheckedCreateInput>
    /**
     * In case the Career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
  }

  /**
   * Career delete
   */
  export type CareerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter which Career to delete.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career deleteMany
   */
  export type CareerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Careers to delete
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to delete.
     */
    limit?: number
  }

  /**
   * Career.students
   */
  export type Career$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Career.subjects
   */
  export type Career$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Career without action
   */
  export type CareerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
  }


  /**
   * Model Cycle
   */

  export type AggregateCycle = {
    _count: CycleCountAggregateOutputType | null
    _avg: CycleAvgAggregateOutputType | null
    _sum: CycleSumAggregateOutputType | null
    _min: CycleMinAggregateOutputType | null
    _max: CycleMaxAggregateOutputType | null
  }

  export type CycleAvgAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type CycleSumAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type CycleMinAggregateOutputType = {
    id: number | null
    name: string | null
    number: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CycleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    number: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CycleCountAggregateOutputType = {
    id: number
    name: number
    number: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CycleAvgAggregateInputType = {
    id?: true
    number?: true
  }

  export type CycleSumAggregateInputType = {
    id?: true
    number?: true
  }

  export type CycleMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CycleMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CycleCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cycle to aggregate.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cycles
    **/
    _count?: true | CycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CycleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CycleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CycleMaxAggregateInputType
  }

  export type GetCycleAggregateType<T extends CycleAggregateArgs> = {
        [P in keyof T & keyof AggregateCycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCycle[P]>
      : GetScalarType<T[P], AggregateCycle[P]>
  }




  export type CycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleWhereInput
    orderBy?: CycleOrderByWithAggregationInput | CycleOrderByWithAggregationInput[]
    by: CycleScalarFieldEnum[] | CycleScalarFieldEnum
    having?: CycleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CycleCountAggregateInputType | true
    _avg?: CycleAvgAggregateInputType
    _sum?: CycleSumAggregateInputType
    _min?: CycleMinAggregateInputType
    _max?: CycleMaxAggregateInputType
  }

  export type CycleGroupByOutputType = {
    id: number
    name: string
    number: number
    createdAt: Date
    updatedAt: Date
    _count: CycleCountAggregateOutputType | null
    _avg: CycleAvgAggregateOutputType | null
    _sum: CycleSumAggregateOutputType | null
    _min: CycleMinAggregateOutputType | null
    _max: CycleMaxAggregateOutputType | null
  }

  type GetCycleGroupByPayload<T extends CycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CycleGroupByOutputType[P]>
            : GetScalarType<T[P], CycleGroupByOutputType[P]>
        }
      >
    >


  export type CycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subjects?: boolean | Cycle$subjectsArgs<ExtArgs>
    _count?: boolean | CycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycle"]>

  export type CycleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cycle"]>

  export type CycleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cycle"]>

  export type CycleSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CycleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "number" | "createdAt" | "updatedAt", ExtArgs["result"]["cycle"]>
  export type CycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Cycle$subjectsArgs<ExtArgs>
    _count?: boolean | CycleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CycleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cycle"
    objects: {
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      number: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cycle"]>
    composites: {}
  }

  type CycleGetPayload<S extends boolean | null | undefined | CycleDefaultArgs> = $Result.GetResult<Prisma.$CyclePayload, S>

  type CycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CycleCountAggregateInputType | true
    }

  export interface CycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cycle'], meta: { name: 'Cycle' } }
    /**
     * Find zero or one Cycle that matches the filter.
     * @param {CycleFindUniqueArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CycleFindUniqueArgs>(args: SelectSubset<T, CycleFindUniqueArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cycle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CycleFindUniqueOrThrowArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CycleFindUniqueOrThrowArgs>(args: SelectSubset<T, CycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleFindFirstArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CycleFindFirstArgs>(args?: SelectSubset<T, CycleFindFirstArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleFindFirstOrThrowArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CycleFindFirstOrThrowArgs>(args?: SelectSubset<T, CycleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cycles
     * const cycles = await prisma.cycle.findMany()
     * 
     * // Get first 10 Cycles
     * const cycles = await prisma.cycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cycleWithIdOnly = await prisma.cycle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CycleFindManyArgs>(args?: SelectSubset<T, CycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cycle.
     * @param {CycleCreateArgs} args - Arguments to create a Cycle.
     * @example
     * // Create one Cycle
     * const Cycle = await prisma.cycle.create({
     *   data: {
     *     // ... data to create a Cycle
     *   }
     * })
     * 
     */
    create<T extends CycleCreateArgs>(args: SelectSubset<T, CycleCreateArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cycles.
     * @param {CycleCreateManyArgs} args - Arguments to create many Cycles.
     * @example
     * // Create many Cycles
     * const cycle = await prisma.cycle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CycleCreateManyArgs>(args?: SelectSubset<T, CycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cycles and returns the data saved in the database.
     * @param {CycleCreateManyAndReturnArgs} args - Arguments to create many Cycles.
     * @example
     * // Create many Cycles
     * const cycle = await prisma.cycle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cycles and only return the `id`
     * const cycleWithIdOnly = await prisma.cycle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CycleCreateManyAndReturnArgs>(args?: SelectSubset<T, CycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cycle.
     * @param {CycleDeleteArgs} args - Arguments to delete one Cycle.
     * @example
     * // Delete one Cycle
     * const Cycle = await prisma.cycle.delete({
     *   where: {
     *     // ... filter to delete one Cycle
     *   }
     * })
     * 
     */
    delete<T extends CycleDeleteArgs>(args: SelectSubset<T, CycleDeleteArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cycle.
     * @param {CycleUpdateArgs} args - Arguments to update one Cycle.
     * @example
     * // Update one Cycle
     * const cycle = await prisma.cycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CycleUpdateArgs>(args: SelectSubset<T, CycleUpdateArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cycles.
     * @param {CycleDeleteManyArgs} args - Arguments to filter Cycles to delete.
     * @example
     * // Delete a few Cycles
     * const { count } = await prisma.cycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CycleDeleteManyArgs>(args?: SelectSubset<T, CycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cycles
     * const cycle = await prisma.cycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CycleUpdateManyArgs>(args: SelectSubset<T, CycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cycles and returns the data updated in the database.
     * @param {CycleUpdateManyAndReturnArgs} args - Arguments to update many Cycles.
     * @example
     * // Update many Cycles
     * const cycle = await prisma.cycle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cycles and only return the `id`
     * const cycleWithIdOnly = await prisma.cycle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CycleUpdateManyAndReturnArgs>(args: SelectSubset<T, CycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cycle.
     * @param {CycleUpsertArgs} args - Arguments to update or create a Cycle.
     * @example
     * // Update or create a Cycle
     * const cycle = await prisma.cycle.upsert({
     *   create: {
     *     // ... data to create a Cycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cycle we want to update
     *   }
     * })
     */
    upsert<T extends CycleUpsertArgs>(args: SelectSubset<T, CycleUpsertArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleCountArgs} args - Arguments to filter Cycles to count.
     * @example
     * // Count the number of Cycles
     * const count = await prisma.cycle.count({
     *   where: {
     *     // ... the filter for the Cycles we want to count
     *   }
     * })
    **/
    count<T extends CycleCountArgs>(
      args?: Subset<T, CycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CycleAggregateArgs>(args: Subset<T, CycleAggregateArgs>): Prisma.PrismaPromise<GetCycleAggregateType<T>>

    /**
     * Group by Cycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CycleGroupByArgs['orderBy'] }
        : { orderBy?: CycleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cycle model
   */
  readonly fields: CycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends Cycle$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Cycle$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cycle model
   */
  interface CycleFieldRefs {
    readonly id: FieldRef<"Cycle", 'Int'>
    readonly name: FieldRef<"Cycle", 'String'>
    readonly number: FieldRef<"Cycle", 'Int'>
    readonly createdAt: FieldRef<"Cycle", 'DateTime'>
    readonly updatedAt: FieldRef<"Cycle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cycle findUnique
   */
  export type CycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle findUniqueOrThrow
   */
  export type CycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle findFirst
   */
  export type CycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cycles.
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cycles.
     */
    distinct?: CycleScalarFieldEnum | CycleScalarFieldEnum[]
  }

  /**
   * Cycle findFirstOrThrow
   */
  export type CycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cycles.
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cycles.
     */
    distinct?: CycleScalarFieldEnum | CycleScalarFieldEnum[]
  }

  /**
   * Cycle findMany
   */
  export type CycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycles to fetch.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cycles.
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    distinct?: CycleScalarFieldEnum | CycleScalarFieldEnum[]
  }

  /**
   * Cycle create
   */
  export type CycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * The data needed to create a Cycle.
     */
    data: XOR<CycleCreateInput, CycleUncheckedCreateInput>
  }

  /**
   * Cycle createMany
   */
  export type CycleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cycles.
     */
    data: CycleCreateManyInput | CycleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cycle createManyAndReturn
   */
  export type CycleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * The data used to create many Cycles.
     */
    data: CycleCreateManyInput | CycleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cycle update
   */
  export type CycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * The data needed to update a Cycle.
     */
    data: XOR<CycleUpdateInput, CycleUncheckedUpdateInput>
    /**
     * Choose, which Cycle to update.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle updateMany
   */
  export type CycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cycles.
     */
    data: XOR<CycleUpdateManyMutationInput, CycleUncheckedUpdateManyInput>
    /**
     * Filter which Cycles to update
     */
    where?: CycleWhereInput
    /**
     * Limit how many Cycles to update.
     */
    limit?: number
  }

  /**
   * Cycle updateManyAndReturn
   */
  export type CycleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * The data used to update Cycles.
     */
    data: XOR<CycleUpdateManyMutationInput, CycleUncheckedUpdateManyInput>
    /**
     * Filter which Cycles to update
     */
    where?: CycleWhereInput
    /**
     * Limit how many Cycles to update.
     */
    limit?: number
  }

  /**
   * Cycle upsert
   */
  export type CycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * The filter to search for the Cycle to update in case it exists.
     */
    where: CycleWhereUniqueInput
    /**
     * In case the Cycle found by the `where` argument doesn't exist, create a new Cycle with this data.
     */
    create: XOR<CycleCreateInput, CycleUncheckedCreateInput>
    /**
     * In case the Cycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CycleUpdateInput, CycleUncheckedUpdateInput>
  }

  /**
   * Cycle delete
   */
  export type CycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter which Cycle to delete.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle deleteMany
   */
  export type CycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cycles to delete
     */
    where?: CycleWhereInput
    /**
     * Limit how many Cycles to delete.
     */
    limit?: number
  }

  /**
   * Cycle.subjects
   */
  export type Cycle$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Cycle without action
   */
  export type CycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cycle
     */
    omit?: CycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    credits: number | null
    maxQuota: number | null
    availableQuota: number | null
    careerId: number | null
    cycleId: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
    credits: number | null
    maxQuota: number | null
    availableQuota: number | null
    careerId: number | null
    cycleId: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    credits: number | null
    maxQuota: number | null
    availableQuota: number | null
    careerId: number | null
    cycleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    credits: number | null
    maxQuota: number | null
    availableQuota: number | null
    careerId: number | null
    cycleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    credits: number
    maxQuota: number
    availableQuota: number
    careerId: number
    cycleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    credits?: true
    maxQuota?: true
    availableQuota?: true
    careerId?: true
    cycleId?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    credits?: true
    maxQuota?: true
    availableQuota?: true
    careerId?: true
    cycleId?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    credits?: true
    maxQuota?: true
    availableQuota?: true
    careerId?: true
    cycleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    credits?: true
    maxQuota?: true
    availableQuota?: true
    careerId?: true
    cycleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    credits?: true
    maxQuota?: true
    availableQuota?: true
    careerId?: true
    cycleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    name: string
    credits: number
    maxQuota: number
    availableQuota: number
    careerId: number
    cycleId: number
    createdAt: Date
    updatedAt: Date
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    credits?: boolean
    maxQuota?: boolean
    availableQuota?: boolean
    careerId?: boolean
    cycleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
    students?: boolean | Subject$studentsArgs<ExtArgs>
    teachers?: boolean | Subject$teachersArgs<ExtArgs>
    enrollments?: boolean | Subject$enrollmentsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    credits?: boolean
    maxQuota?: boolean
    availableQuota?: boolean
    careerId?: boolean
    cycleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    credits?: boolean
    maxQuota?: boolean
    availableQuota?: boolean
    careerId?: boolean
    cycleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    credits?: boolean
    maxQuota?: boolean
    availableQuota?: boolean
    careerId?: boolean
    cycleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "credits" | "maxQuota" | "availableQuota" | "careerId" | "cycleId" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
    students?: boolean | Subject$studentsArgs<ExtArgs>
    teachers?: boolean | Subject$teachersArgs<ExtArgs>
    enrollments?: boolean | Subject$enrollmentsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      career: Prisma.$CareerPayload<ExtArgs>
      cycle: Prisma.$CyclePayload<ExtArgs>
      students: Prisma.$StudentSubjectPayload<ExtArgs>[]
      teachers: Prisma.$TeacherSubjectPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      credits: number
      maxQuota: number
      availableQuota: number
      careerId: number
      cycleId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cycle<T extends CycleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CycleDefaultArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Subject$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends Subject$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Subject$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly credits: FieldRef<"Subject", 'Int'>
    readonly maxQuota: FieldRef<"Subject", 'Int'>
    readonly availableQuota: FieldRef<"Subject", 'Int'>
    readonly careerId: FieldRef<"Subject", 'Int'>
    readonly cycleId: FieldRef<"Subject", 'Int'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
    readonly updatedAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.students
   */
  export type Subject$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    cursor?: StudentSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * Subject.teachers
   */
  export type Subject$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * Subject.enrollments
   */
  export type Subject$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    isActive: boolean | null
    employmentType: $Enums.EmploymentType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    isActive: boolean | null
    employmentType: $Enums.EmploymentType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    isActive: number
    employmentType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isActive?: true
    employmentType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isActive?: true
    employmentType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isActive?: true
    employmentType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone: string | null
    isActive: boolean
    employmentType: $Enums.EmploymentType
    createdAt: Date
    updatedAt: Date
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    employmentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subjects?: boolean | Teacher$subjectsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    employmentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    employmentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    employmentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "email" | "phone" | "isActive" | "employmentType" | "createdAt" | "updatedAt", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Teacher$subjectsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      subjects: Prisma.$TeacherSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      firstName: string
      lastName: string
      email: string
      phone: string | null
      isActive: boolean
      employmentType: $Enums.EmploymentType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends Teacher$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly userId: FieldRef<"Teacher", 'Int'>
    readonly firstName: FieldRef<"Teacher", 'String'>
    readonly lastName: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly phone: FieldRef<"Teacher", 'String'>
    readonly isActive: FieldRef<"Teacher", 'Boolean'>
    readonly employmentType: FieldRef<"Teacher", 'EmploymentType'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly updatedAt: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.subjects
   */
  export type Teacher$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model TeacherSubject
   */

  export type AggregateTeacherSubject = {
    _count: TeacherSubjectCountAggregateOutputType | null
    _avg: TeacherSubjectAvgAggregateOutputType | null
    _sum: TeacherSubjectSumAggregateOutputType | null
    _min: TeacherSubjectMinAggregateOutputType | null
    _max: TeacherSubjectMaxAggregateOutputType | null
  }

  export type TeacherSubjectAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectMinAggregateOutputType = {
    id: number | null
    teacherId: number | null
    subjectId: number | null
    createdAt: Date | null
  }

  export type TeacherSubjectMaxAggregateOutputType = {
    id: number | null
    teacherId: number | null
    subjectId: number | null
    createdAt: Date | null
  }

  export type TeacherSubjectCountAggregateOutputType = {
    id: number
    teacherId: number
    subjectId: number
    createdAt: number
    _all: number
  }


  export type TeacherSubjectAvgAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectSumAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectMinAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
    createdAt?: true
  }

  export type TeacherSubjectMaxAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
    createdAt?: true
  }

  export type TeacherSubjectCountAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
    createdAt?: true
    _all?: true
  }

  export type TeacherSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSubject to aggregate.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherSubjects
    **/
    _count?: true | TeacherSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherSubjectMaxAggregateInputType
  }

  export type GetTeacherSubjectAggregateType<T extends TeacherSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherSubject[P]>
      : GetScalarType<T[P], AggregateTeacherSubject[P]>
  }




  export type TeacherSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithAggregationInput | TeacherSubjectOrderByWithAggregationInput[]
    by: TeacherSubjectScalarFieldEnum[] | TeacherSubjectScalarFieldEnum
    having?: TeacherSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherSubjectCountAggregateInputType | true
    _avg?: TeacherSubjectAvgAggregateInputType
    _sum?: TeacherSubjectSumAggregateInputType
    _min?: TeacherSubjectMinAggregateInputType
    _max?: TeacherSubjectMaxAggregateInputType
  }

  export type TeacherSubjectGroupByOutputType = {
    id: number
    teacherId: number
    subjectId: number
    createdAt: Date
    _count: TeacherSubjectCountAggregateOutputType | null
    _avg: TeacherSubjectAvgAggregateOutputType | null
    _sum: TeacherSubjectSumAggregateOutputType | null
    _min: TeacherSubjectMinAggregateOutputType | null
    _max: TeacherSubjectMaxAggregateOutputType | null
  }

  type GetTeacherSubjectGroupByPayload<T extends TeacherSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherSubjectGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    createdAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectScalar = {
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    createdAt?: boolean
  }

  export type TeacherSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "subjectId" | "createdAt", ExtArgs["result"]["teacherSubject"]>
  export type TeacherSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type TeacherSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type TeacherSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $TeacherSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherSubject"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherId: number
      subjectId: number
      createdAt: Date
    }, ExtArgs["result"]["teacherSubject"]>
    composites: {}
  }

  type TeacherSubjectGetPayload<S extends boolean | null | undefined | TeacherSubjectDefaultArgs> = $Result.GetResult<Prisma.$TeacherSubjectPayload, S>

  type TeacherSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherSubjectCountAggregateInputType | true
    }

  export interface TeacherSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherSubject'], meta: { name: 'TeacherSubject' } }
    /**
     * Find zero or one TeacherSubject that matches the filter.
     * @param {TeacherSubjectFindUniqueArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherSubjectFindUniqueArgs>(args: SelectSubset<T, TeacherSubjectFindUniqueArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherSubjectFindUniqueOrThrowArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindFirstArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherSubjectFindFirstArgs>(args?: SelectSubset<T, TeacherSubjectFindFirstArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindFirstOrThrowArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherSubjects
     * const teacherSubjects = await prisma.teacherSubject.findMany()
     * 
     * // Get first 10 TeacherSubjects
     * const teacherSubjects = await prisma.teacherSubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherSubjectWithIdOnly = await prisma.teacherSubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherSubjectFindManyArgs>(args?: SelectSubset<T, TeacherSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherSubject.
     * @param {TeacherSubjectCreateArgs} args - Arguments to create a TeacherSubject.
     * @example
     * // Create one TeacherSubject
     * const TeacherSubject = await prisma.teacherSubject.create({
     *   data: {
     *     // ... data to create a TeacherSubject
     *   }
     * })
     * 
     */
    create<T extends TeacherSubjectCreateArgs>(args: SelectSubset<T, TeacherSubjectCreateArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherSubjects.
     * @param {TeacherSubjectCreateManyArgs} args - Arguments to create many TeacherSubjects.
     * @example
     * // Create many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherSubjectCreateManyArgs>(args?: SelectSubset<T, TeacherSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherSubjects and returns the data saved in the database.
     * @param {TeacherSubjectCreateManyAndReturnArgs} args - Arguments to create many TeacherSubjects.
     * @example
     * // Create many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherSubjects and only return the `id`
     * const teacherSubjectWithIdOnly = await prisma.teacherSubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherSubject.
     * @param {TeacherSubjectDeleteArgs} args - Arguments to delete one TeacherSubject.
     * @example
     * // Delete one TeacherSubject
     * const TeacherSubject = await prisma.teacherSubject.delete({
     *   where: {
     *     // ... filter to delete one TeacherSubject
     *   }
     * })
     * 
     */
    delete<T extends TeacherSubjectDeleteArgs>(args: SelectSubset<T, TeacherSubjectDeleteArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherSubject.
     * @param {TeacherSubjectUpdateArgs} args - Arguments to update one TeacherSubject.
     * @example
     * // Update one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherSubjectUpdateArgs>(args: SelectSubset<T, TeacherSubjectUpdateArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherSubjects.
     * @param {TeacherSubjectDeleteManyArgs} args - Arguments to filter TeacherSubjects to delete.
     * @example
     * // Delete a few TeacherSubjects
     * const { count } = await prisma.teacherSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherSubjectDeleteManyArgs>(args?: SelectSubset<T, TeacherSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherSubjectUpdateManyArgs>(args: SelectSubset<T, TeacherSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSubjects and returns the data updated in the database.
     * @param {TeacherSubjectUpdateManyAndReturnArgs} args - Arguments to update many TeacherSubjects.
     * @example
     * // Update many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherSubjects and only return the `id`
     * const teacherSubjectWithIdOnly = await prisma.teacherSubject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherSubject.
     * @param {TeacherSubjectUpsertArgs} args - Arguments to update or create a TeacherSubject.
     * @example
     * // Update or create a TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.upsert({
     *   create: {
     *     // ... data to create a TeacherSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherSubject we want to update
     *   }
     * })
     */
    upsert<T extends TeacherSubjectUpsertArgs>(args: SelectSubset<T, TeacherSubjectUpsertArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectCountArgs} args - Arguments to filter TeacherSubjects to count.
     * @example
     * // Count the number of TeacherSubjects
     * const count = await prisma.teacherSubject.count({
     *   where: {
     *     // ... the filter for the TeacherSubjects we want to count
     *   }
     * })
    **/
    count<T extends TeacherSubjectCountArgs>(
      args?: Subset<T, TeacherSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherSubjectAggregateArgs>(args: Subset<T, TeacherSubjectAggregateArgs>): Prisma.PrismaPromise<GetTeacherSubjectAggregateType<T>>

    /**
     * Group by TeacherSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherSubjectGroupByArgs['orderBy'] }
        : { orderBy?: TeacherSubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherSubject model
   */
  readonly fields: TeacherSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherSubject model
   */
  interface TeacherSubjectFieldRefs {
    readonly id: FieldRef<"TeacherSubject", 'Int'>
    readonly teacherId: FieldRef<"TeacherSubject", 'Int'>
    readonly subjectId: FieldRef<"TeacherSubject", 'Int'>
    readonly createdAt: FieldRef<"TeacherSubject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherSubject findUnique
   */
  export type TeacherSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject findUniqueOrThrow
   */
  export type TeacherSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject findFirst
   */
  export type TeacherSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSubjects.
     */
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject findFirstOrThrow
   */
  export type TeacherSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSubjects.
     */
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject findMany
   */
  export type TeacherSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubjects to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject create
   */
  export type TeacherSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherSubject.
     */
    data: XOR<TeacherSubjectCreateInput, TeacherSubjectUncheckedCreateInput>
  }

  /**
   * TeacherSubject createMany
   */
  export type TeacherSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherSubjects.
     */
    data: TeacherSubjectCreateManyInput | TeacherSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherSubject createManyAndReturn
   */
  export type TeacherSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherSubjects.
     */
    data: TeacherSubjectCreateManyInput | TeacherSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSubject update
   */
  export type TeacherSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherSubject.
     */
    data: XOR<TeacherSubjectUpdateInput, TeacherSubjectUncheckedUpdateInput>
    /**
     * Choose, which TeacherSubject to update.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject updateMany
   */
  export type TeacherSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherSubjects.
     */
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSubjects to update
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to update.
     */
    limit?: number
  }

  /**
   * TeacherSubject updateManyAndReturn
   */
  export type TeacherSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * The data used to update TeacherSubjects.
     */
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSubjects to update
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSubject upsert
   */
  export type TeacherSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherSubject to update in case it exists.
     */
    where: TeacherSubjectWhereUniqueInput
    /**
     * In case the TeacherSubject found by the `where` argument doesn't exist, create a new TeacherSubject with this data.
     */
    create: XOR<TeacherSubjectCreateInput, TeacherSubjectUncheckedCreateInput>
    /**
     * In case the TeacherSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherSubjectUpdateInput, TeacherSubjectUncheckedUpdateInput>
  }

  /**
   * TeacherSubject delete
   */
  export type TeacherSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter which TeacherSubject to delete.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject deleteMany
   */
  export type TeacherSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSubjects to delete
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to delete.
     */
    limit?: number
  }

  /**
   * TeacherSubject without action
   */
  export type TeacherSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    careerId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    careerId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    isActive: boolean | null
    careerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    isActive: boolean | null
    careerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    isActive: number
    careerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isActive?: true
    careerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isActive?: true
    careerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    isActive?: true
    careerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone: string | null
    isActive: boolean
    careerId: number
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    careerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    subjects?: boolean | Student$subjectsArgs<ExtArgs>
    enrollments?: boolean | Student$enrollmentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    careerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    careerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    isActive?: boolean
    careerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "email" | "phone" | "isActive" | "careerId" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    subjects?: boolean | Student$subjectsArgs<ExtArgs>
    enrollments?: boolean | Student$enrollmentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      career: Prisma.$CareerPayload<ExtArgs>
      subjects: Prisma.$StudentSubjectPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      firstName: string
      lastName: string
      email: string
      phone: string | null
      isActive: boolean
      careerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends Student$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Student$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Student$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly userId: FieldRef<"Student", 'Int'>
    readonly firstName: FieldRef<"Student", 'String'>
    readonly lastName: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly isActive: FieldRef<"Student", 'Boolean'>
    readonly careerId: FieldRef<"Student", 'Int'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.subjects
   */
  export type Student$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    cursor?: StudentSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * Student.enrollments
   */
  export type Student$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model StudentSubject
   */

  export type AggregateStudentSubject = {
    _count: StudentSubjectCountAggregateOutputType | null
    _avg: StudentSubjectAvgAggregateOutputType | null
    _sum: StudentSubjectSumAggregateOutputType | null
    _min: StudentSubjectMinAggregateOutputType | null
    _max: StudentSubjectMaxAggregateOutputType | null
  }

  export type StudentSubjectAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    grade: number | null
  }

  export type StudentSubjectSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    grade: number | null
  }

  export type StudentSubjectMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    grade: number | null
    passed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentSubjectMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    grade: number | null
    passed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentSubjectCountAggregateOutputType = {
    id: number
    studentId: number
    subjectId: number
    grade: number
    passed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentSubjectAvgAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    grade?: true
  }

  export type StudentSubjectSumAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    grade?: true
  }

  export type StudentSubjectMinAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    grade?: true
    passed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentSubjectMaxAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    grade?: true
    passed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentSubjectCountAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    grade?: true
    passed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSubject to aggregate.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentSubjects
    **/
    _count?: true | StudentSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentSubjectMaxAggregateInputType
  }

  export type GetStudentSubjectAggregateType<T extends StudentSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentSubject[P]>
      : GetScalarType<T[P], AggregateStudentSubject[P]>
  }




  export type StudentSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithAggregationInput | StudentSubjectOrderByWithAggregationInput[]
    by: StudentSubjectScalarFieldEnum[] | StudentSubjectScalarFieldEnum
    having?: StudentSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentSubjectCountAggregateInputType | true
    _avg?: StudentSubjectAvgAggregateInputType
    _sum?: StudentSubjectSumAggregateInputType
    _min?: StudentSubjectMinAggregateInputType
    _max?: StudentSubjectMaxAggregateInputType
  }

  export type StudentSubjectGroupByOutputType = {
    id: number
    studentId: number
    subjectId: number
    grade: number | null
    passed: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentSubjectCountAggregateOutputType | null
    _avg: StudentSubjectAvgAggregateOutputType | null
    _sum: StudentSubjectSumAggregateOutputType | null
    _min: StudentSubjectMinAggregateOutputType | null
    _max: StudentSubjectMaxAggregateOutputType | null
  }

  type GetStudentSubjectGroupByPayload<T extends StudentSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], StudentSubjectGroupByOutputType[P]>
        }
      >
    >


  export type StudentSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    grade?: boolean
    passed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    grade?: boolean
    passed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    grade?: boolean
    passed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectScalar = {
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    grade?: boolean
    passed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subjectId" | "grade" | "passed" | "createdAt" | "updatedAt", ExtArgs["result"]["studentSubject"]>
  export type StudentSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type StudentSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type StudentSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $StudentSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentSubject"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      subjectId: number
      grade: number | null
      passed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentSubject"]>
    composites: {}
  }

  type StudentSubjectGetPayload<S extends boolean | null | undefined | StudentSubjectDefaultArgs> = $Result.GetResult<Prisma.$StudentSubjectPayload, S>

  type StudentSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentSubjectCountAggregateInputType | true
    }

  export interface StudentSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentSubject'], meta: { name: 'StudentSubject' } }
    /**
     * Find zero or one StudentSubject that matches the filter.
     * @param {StudentSubjectFindUniqueArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentSubjectFindUniqueArgs>(args: SelectSubset<T, StudentSubjectFindUniqueArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentSubjectFindUniqueOrThrowArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindFirstArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentSubjectFindFirstArgs>(args?: SelectSubset<T, StudentSubjectFindFirstArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindFirstOrThrowArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentSubjects
     * const studentSubjects = await prisma.studentSubject.findMany()
     * 
     * // Get first 10 StudentSubjects
     * const studentSubjects = await prisma.studentSubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentSubjectFindManyArgs>(args?: SelectSubset<T, StudentSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentSubject.
     * @param {StudentSubjectCreateArgs} args - Arguments to create a StudentSubject.
     * @example
     * // Create one StudentSubject
     * const StudentSubject = await prisma.studentSubject.create({
     *   data: {
     *     // ... data to create a StudentSubject
     *   }
     * })
     * 
     */
    create<T extends StudentSubjectCreateArgs>(args: SelectSubset<T, StudentSubjectCreateArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentSubjects.
     * @param {StudentSubjectCreateManyArgs} args - Arguments to create many StudentSubjects.
     * @example
     * // Create many StudentSubjects
     * const studentSubject = await prisma.studentSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentSubjectCreateManyArgs>(args?: SelectSubset<T, StudentSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentSubjects and returns the data saved in the database.
     * @param {StudentSubjectCreateManyAndReturnArgs} args - Arguments to create many StudentSubjects.
     * @example
     * // Create many StudentSubjects
     * const studentSubject = await prisma.studentSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentSubjects and only return the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentSubject.
     * @param {StudentSubjectDeleteArgs} args - Arguments to delete one StudentSubject.
     * @example
     * // Delete one StudentSubject
     * const StudentSubject = await prisma.studentSubject.delete({
     *   where: {
     *     // ... filter to delete one StudentSubject
     *   }
     * })
     * 
     */
    delete<T extends StudentSubjectDeleteArgs>(args: SelectSubset<T, StudentSubjectDeleteArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentSubject.
     * @param {StudentSubjectUpdateArgs} args - Arguments to update one StudentSubject.
     * @example
     * // Update one StudentSubject
     * const studentSubject = await prisma.studentSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentSubjectUpdateArgs>(args: SelectSubset<T, StudentSubjectUpdateArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentSubjects.
     * @param {StudentSubjectDeleteManyArgs} args - Arguments to filter StudentSubjects to delete.
     * @example
     * // Delete a few StudentSubjects
     * const { count } = await prisma.studentSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentSubjectDeleteManyArgs>(args?: SelectSubset<T, StudentSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentSubjects
     * const studentSubject = await prisma.studentSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentSubjectUpdateManyArgs>(args: SelectSubset<T, StudentSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubjects and returns the data updated in the database.
     * @param {StudentSubjectUpdateManyAndReturnArgs} args - Arguments to update many StudentSubjects.
     * @example
     * // Update many StudentSubjects
     * const studentSubject = await prisma.studentSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentSubjects and only return the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentSubject.
     * @param {StudentSubjectUpsertArgs} args - Arguments to update or create a StudentSubject.
     * @example
     * // Update or create a StudentSubject
     * const studentSubject = await prisma.studentSubject.upsert({
     *   create: {
     *     // ... data to create a StudentSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentSubject we want to update
     *   }
     * })
     */
    upsert<T extends StudentSubjectUpsertArgs>(args: SelectSubset<T, StudentSubjectUpsertArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectCountArgs} args - Arguments to filter StudentSubjects to count.
     * @example
     * // Count the number of StudentSubjects
     * const count = await prisma.studentSubject.count({
     *   where: {
     *     // ... the filter for the StudentSubjects we want to count
     *   }
     * })
    **/
    count<T extends StudentSubjectCountArgs>(
      args?: Subset<T, StudentSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentSubjectAggregateArgs>(args: Subset<T, StudentSubjectAggregateArgs>): Prisma.PrismaPromise<GetStudentSubjectAggregateType<T>>

    /**
     * Group by StudentSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentSubjectGroupByArgs['orderBy'] }
        : { orderBy?: StudentSubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentSubject model
   */
  readonly fields: StudentSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentSubject model
   */
  interface StudentSubjectFieldRefs {
    readonly id: FieldRef<"StudentSubject", 'Int'>
    readonly studentId: FieldRef<"StudentSubject", 'Int'>
    readonly subjectId: FieldRef<"StudentSubject", 'Int'>
    readonly grade: FieldRef<"StudentSubject", 'Float'>
    readonly passed: FieldRef<"StudentSubject", 'Boolean'>
    readonly createdAt: FieldRef<"StudentSubject", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentSubject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentSubject findUnique
   */
  export type StudentSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject findUniqueOrThrow
   */
  export type StudentSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject findFirst
   */
  export type StudentSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubjects.
     */
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject findFirstOrThrow
   */
  export type StudentSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubjects.
     */
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject findMany
   */
  export type StudentSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubjects to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject create
   */
  export type StudentSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentSubject.
     */
    data: XOR<StudentSubjectCreateInput, StudentSubjectUncheckedCreateInput>
  }

  /**
   * StudentSubject createMany
   */
  export type StudentSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentSubjects.
     */
    data: StudentSubjectCreateManyInput | StudentSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentSubject createManyAndReturn
   */
  export type StudentSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many StudentSubjects.
     */
    data: StudentSubjectCreateManyInput | StudentSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSubject update
   */
  export type StudentSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentSubject.
     */
    data: XOR<StudentSubjectUpdateInput, StudentSubjectUncheckedUpdateInput>
    /**
     * Choose, which StudentSubject to update.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject updateMany
   */
  export type StudentSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentSubjects.
     */
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubjects to update
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to update.
     */
    limit?: number
  }

  /**
   * StudentSubject updateManyAndReturn
   */
  export type StudentSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * The data used to update StudentSubjects.
     */
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubjects to update
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSubject upsert
   */
  export type StudentSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentSubject to update in case it exists.
     */
    where: StudentSubjectWhereUniqueInput
    /**
     * In case the StudentSubject found by the `where` argument doesn't exist, create a new StudentSubject with this data.
     */
    create: XOR<StudentSubjectCreateInput, StudentSubjectUncheckedCreateInput>
    /**
     * In case the StudentSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentSubjectUpdateInput, StudentSubjectUncheckedUpdateInput>
  }

  /**
   * StudentSubject delete
   */
  export type StudentSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter which StudentSubject to delete.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject deleteMany
   */
  export type StudentSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSubjects to delete
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to delete.
     */
    limit?: number
  }

  /**
   * StudentSubject without action
   */
  export type StudentSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
  }


  /**
   * Model AcademicPeriod
   */

  export type AggregateAcademicPeriod = {
    _count: AcademicPeriodCountAggregateOutputType | null
    _avg: AcademicPeriodAvgAggregateOutputType | null
    _sum: AcademicPeriodSumAggregateOutputType | null
    _min: AcademicPeriodMinAggregateOutputType | null
    _max: AcademicPeriodMaxAggregateOutputType | null
  }

  export type AcademicPeriodAvgAggregateOutputType = {
    id: number | null
  }

  export type AcademicPeriodSumAggregateOutputType = {
    id: number | null
  }

  export type AcademicPeriodMinAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademicPeriodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademicPeriodCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AcademicPeriodAvgAggregateInputType = {
    id?: true
  }

  export type AcademicPeriodSumAggregateInputType = {
    id?: true
  }

  export type AcademicPeriodMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademicPeriodMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademicPeriodCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AcademicPeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicPeriod to aggregate.
     */
    where?: AcademicPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicPeriods to fetch.
     */
    orderBy?: AcademicPeriodOrderByWithRelationInput | AcademicPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicPeriods
    **/
    _count?: true | AcademicPeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcademicPeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcademicPeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicPeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicPeriodMaxAggregateInputType
  }

  export type GetAcademicPeriodAggregateType<T extends AcademicPeriodAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicPeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicPeriod[P]>
      : GetScalarType<T[P], AggregateAcademicPeriod[P]>
  }




  export type AcademicPeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicPeriodWhereInput
    orderBy?: AcademicPeriodOrderByWithAggregationInput | AcademicPeriodOrderByWithAggregationInput[]
    by: AcademicPeriodScalarFieldEnum[] | AcademicPeriodScalarFieldEnum
    having?: AcademicPeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicPeriodCountAggregateInputType | true
    _avg?: AcademicPeriodAvgAggregateInputType
    _sum?: AcademicPeriodSumAggregateInputType
    _min?: AcademicPeriodMinAggregateInputType
    _max?: AcademicPeriodMaxAggregateInputType
  }

  export type AcademicPeriodGroupByOutputType = {
    id: number
    name: string
    startDate: Date
    endDate: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AcademicPeriodCountAggregateOutputType | null
    _avg: AcademicPeriodAvgAggregateOutputType | null
    _sum: AcademicPeriodSumAggregateOutputType | null
    _min: AcademicPeriodMinAggregateOutputType | null
    _max: AcademicPeriodMaxAggregateOutputType | null
  }

  type GetAcademicPeriodGroupByPayload<T extends AcademicPeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicPeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicPeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicPeriodGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicPeriodGroupByOutputType[P]>
        }
      >
    >


  export type AcademicPeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enrollments?: boolean | AcademicPeriod$enrollmentsArgs<ExtArgs>
    _count?: boolean | AcademicPeriodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicPeriod"]>

  export type AcademicPeriodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["academicPeriod"]>

  export type AcademicPeriodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["academicPeriod"]>

  export type AcademicPeriodSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AcademicPeriodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["academicPeriod"]>
  export type AcademicPeriodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | AcademicPeriod$enrollmentsArgs<ExtArgs>
    _count?: boolean | AcademicPeriodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AcademicPeriodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AcademicPeriodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AcademicPeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicPeriod"
    objects: {
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      startDate: Date
      endDate: Date
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["academicPeriod"]>
    composites: {}
  }

  type AcademicPeriodGetPayload<S extends boolean | null | undefined | AcademicPeriodDefaultArgs> = $Result.GetResult<Prisma.$AcademicPeriodPayload, S>

  type AcademicPeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcademicPeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademicPeriodCountAggregateInputType | true
    }

  export interface AcademicPeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicPeriod'], meta: { name: 'AcademicPeriod' } }
    /**
     * Find zero or one AcademicPeriod that matches the filter.
     * @param {AcademicPeriodFindUniqueArgs} args - Arguments to find a AcademicPeriod
     * @example
     * // Get one AcademicPeriod
     * const academicPeriod = await prisma.academicPeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicPeriodFindUniqueArgs>(args: SelectSubset<T, AcademicPeriodFindUniqueArgs<ExtArgs>>): Prisma__AcademicPeriodClient<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcademicPeriod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademicPeriodFindUniqueOrThrowArgs} args - Arguments to find a AcademicPeriod
     * @example
     * // Get one AcademicPeriod
     * const academicPeriod = await prisma.academicPeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicPeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicPeriodClient<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicPeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicPeriodFindFirstArgs} args - Arguments to find a AcademicPeriod
     * @example
     * // Get one AcademicPeriod
     * const academicPeriod = await prisma.academicPeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicPeriodFindFirstArgs>(args?: SelectSubset<T, AcademicPeriodFindFirstArgs<ExtArgs>>): Prisma__AcademicPeriodClient<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicPeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicPeriodFindFirstOrThrowArgs} args - Arguments to find a AcademicPeriod
     * @example
     * // Get one AcademicPeriod
     * const academicPeriod = await prisma.academicPeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicPeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicPeriodClient<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcademicPeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicPeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicPeriods
     * const academicPeriods = await prisma.academicPeriod.findMany()
     * 
     * // Get first 10 AcademicPeriods
     * const academicPeriods = await prisma.academicPeriod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicPeriodWithIdOnly = await prisma.academicPeriod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademicPeriodFindManyArgs>(args?: SelectSubset<T, AcademicPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcademicPeriod.
     * @param {AcademicPeriodCreateArgs} args - Arguments to create a AcademicPeriod.
     * @example
     * // Create one AcademicPeriod
     * const AcademicPeriod = await prisma.academicPeriod.create({
     *   data: {
     *     // ... data to create a AcademicPeriod
     *   }
     * })
     * 
     */
    create<T extends AcademicPeriodCreateArgs>(args: SelectSubset<T, AcademicPeriodCreateArgs<ExtArgs>>): Prisma__AcademicPeriodClient<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcademicPeriods.
     * @param {AcademicPeriodCreateManyArgs} args - Arguments to create many AcademicPeriods.
     * @example
     * // Create many AcademicPeriods
     * const academicPeriod = await prisma.academicPeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicPeriodCreateManyArgs>(args?: SelectSubset<T, AcademicPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcademicPeriods and returns the data saved in the database.
     * @param {AcademicPeriodCreateManyAndReturnArgs} args - Arguments to create many AcademicPeriods.
     * @example
     * // Create many AcademicPeriods
     * const academicPeriod = await prisma.academicPeriod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcademicPeriods and only return the `id`
     * const academicPeriodWithIdOnly = await prisma.academicPeriod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcademicPeriodCreateManyAndReturnArgs>(args?: SelectSubset<T, AcademicPeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AcademicPeriod.
     * @param {AcademicPeriodDeleteArgs} args - Arguments to delete one AcademicPeriod.
     * @example
     * // Delete one AcademicPeriod
     * const AcademicPeriod = await prisma.academicPeriod.delete({
     *   where: {
     *     // ... filter to delete one AcademicPeriod
     *   }
     * })
     * 
     */
    delete<T extends AcademicPeriodDeleteArgs>(args: SelectSubset<T, AcademicPeriodDeleteArgs<ExtArgs>>): Prisma__AcademicPeriodClient<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcademicPeriod.
     * @param {AcademicPeriodUpdateArgs} args - Arguments to update one AcademicPeriod.
     * @example
     * // Update one AcademicPeriod
     * const academicPeriod = await prisma.academicPeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicPeriodUpdateArgs>(args: SelectSubset<T, AcademicPeriodUpdateArgs<ExtArgs>>): Prisma__AcademicPeriodClient<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcademicPeriods.
     * @param {AcademicPeriodDeleteManyArgs} args - Arguments to filter AcademicPeriods to delete.
     * @example
     * // Delete a few AcademicPeriods
     * const { count } = await prisma.academicPeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicPeriodDeleteManyArgs>(args?: SelectSubset<T, AcademicPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicPeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicPeriods
     * const academicPeriod = await prisma.academicPeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicPeriodUpdateManyArgs>(args: SelectSubset<T, AcademicPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicPeriods and returns the data updated in the database.
     * @param {AcademicPeriodUpdateManyAndReturnArgs} args - Arguments to update many AcademicPeriods.
     * @example
     * // Update many AcademicPeriods
     * const academicPeriod = await prisma.academicPeriod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AcademicPeriods and only return the `id`
     * const academicPeriodWithIdOnly = await prisma.academicPeriod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AcademicPeriodUpdateManyAndReturnArgs>(args: SelectSubset<T, AcademicPeriodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AcademicPeriod.
     * @param {AcademicPeriodUpsertArgs} args - Arguments to update or create a AcademicPeriod.
     * @example
     * // Update or create a AcademicPeriod
     * const academicPeriod = await prisma.academicPeriod.upsert({
     *   create: {
     *     // ... data to create a AcademicPeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicPeriod we want to update
     *   }
     * })
     */
    upsert<T extends AcademicPeriodUpsertArgs>(args: SelectSubset<T, AcademicPeriodUpsertArgs<ExtArgs>>): Prisma__AcademicPeriodClient<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcademicPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicPeriodCountArgs} args - Arguments to filter AcademicPeriods to count.
     * @example
     * // Count the number of AcademicPeriods
     * const count = await prisma.academicPeriod.count({
     *   where: {
     *     // ... the filter for the AcademicPeriods we want to count
     *   }
     * })
    **/
    count<T extends AcademicPeriodCountArgs>(
      args?: Subset<T, AcademicPeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicPeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicPeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcademicPeriodAggregateArgs>(args: Subset<T, AcademicPeriodAggregateArgs>): Prisma.PrismaPromise<GetAcademicPeriodAggregateType<T>>

    /**
     * Group by AcademicPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicPeriodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcademicPeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicPeriodGroupByArgs['orderBy'] }
        : { orderBy?: AcademicPeriodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcademicPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicPeriod model
   */
  readonly fields: AcademicPeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicPeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicPeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollments<T extends AcademicPeriod$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, AcademicPeriod$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AcademicPeriod model
   */
  interface AcademicPeriodFieldRefs {
    readonly id: FieldRef<"AcademicPeriod", 'Int'>
    readonly name: FieldRef<"AcademicPeriod", 'String'>
    readonly startDate: FieldRef<"AcademicPeriod", 'DateTime'>
    readonly endDate: FieldRef<"AcademicPeriod", 'DateTime'>
    readonly isActive: FieldRef<"AcademicPeriod", 'Boolean'>
    readonly createdAt: FieldRef<"AcademicPeriod", 'DateTime'>
    readonly updatedAt: FieldRef<"AcademicPeriod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcademicPeriod findUnique
   */
  export type AcademicPeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicPeriodInclude<ExtArgs> | null
    /**
     * Filter, which AcademicPeriod to fetch.
     */
    where: AcademicPeriodWhereUniqueInput
  }

  /**
   * AcademicPeriod findUniqueOrThrow
   */
  export type AcademicPeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicPeriodInclude<ExtArgs> | null
    /**
     * Filter, which AcademicPeriod to fetch.
     */
    where: AcademicPeriodWhereUniqueInput
  }

  /**
   * AcademicPeriod findFirst
   */
  export type AcademicPeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicPeriodInclude<ExtArgs> | null
    /**
     * Filter, which AcademicPeriod to fetch.
     */
    where?: AcademicPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicPeriods to fetch.
     */
    orderBy?: AcademicPeriodOrderByWithRelationInput | AcademicPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicPeriods.
     */
    cursor?: AcademicPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicPeriods.
     */
    distinct?: AcademicPeriodScalarFieldEnum | AcademicPeriodScalarFieldEnum[]
  }

  /**
   * AcademicPeriod findFirstOrThrow
   */
  export type AcademicPeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicPeriodInclude<ExtArgs> | null
    /**
     * Filter, which AcademicPeriod to fetch.
     */
    where?: AcademicPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicPeriods to fetch.
     */
    orderBy?: AcademicPeriodOrderByWithRelationInput | AcademicPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicPeriods.
     */
    cursor?: AcademicPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicPeriods.
     */
    distinct?: AcademicPeriodScalarFieldEnum | AcademicPeriodScalarFieldEnum[]
  }

  /**
   * AcademicPeriod findMany
   */
  export type AcademicPeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicPeriodInclude<ExtArgs> | null
    /**
     * Filter, which AcademicPeriods to fetch.
     */
    where?: AcademicPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicPeriods to fetch.
     */
    orderBy?: AcademicPeriodOrderByWithRelationInput | AcademicPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicPeriods.
     */
    cursor?: AcademicPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicPeriods.
     */
    skip?: number
    distinct?: AcademicPeriodScalarFieldEnum | AcademicPeriodScalarFieldEnum[]
  }

  /**
   * AcademicPeriod create
   */
  export type AcademicPeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicPeriodInclude<ExtArgs> | null
    /**
     * The data needed to create a AcademicPeriod.
     */
    data: XOR<AcademicPeriodCreateInput, AcademicPeriodUncheckedCreateInput>
  }

  /**
   * AcademicPeriod createMany
   */
  export type AcademicPeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicPeriods.
     */
    data: AcademicPeriodCreateManyInput | AcademicPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicPeriod createManyAndReturn
   */
  export type AcademicPeriodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * The data used to create many AcademicPeriods.
     */
    data: AcademicPeriodCreateManyInput | AcademicPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicPeriod update
   */
  export type AcademicPeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicPeriodInclude<ExtArgs> | null
    /**
     * The data needed to update a AcademicPeriod.
     */
    data: XOR<AcademicPeriodUpdateInput, AcademicPeriodUncheckedUpdateInput>
    /**
     * Choose, which AcademicPeriod to update.
     */
    where: AcademicPeriodWhereUniqueInput
  }

  /**
   * AcademicPeriod updateMany
   */
  export type AcademicPeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicPeriods.
     */
    data: XOR<AcademicPeriodUpdateManyMutationInput, AcademicPeriodUncheckedUpdateManyInput>
    /**
     * Filter which AcademicPeriods to update
     */
    where?: AcademicPeriodWhereInput
    /**
     * Limit how many AcademicPeriods to update.
     */
    limit?: number
  }

  /**
   * AcademicPeriod updateManyAndReturn
   */
  export type AcademicPeriodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * The data used to update AcademicPeriods.
     */
    data: XOR<AcademicPeriodUpdateManyMutationInput, AcademicPeriodUncheckedUpdateManyInput>
    /**
     * Filter which AcademicPeriods to update
     */
    where?: AcademicPeriodWhereInput
    /**
     * Limit how many AcademicPeriods to update.
     */
    limit?: number
  }

  /**
   * AcademicPeriod upsert
   */
  export type AcademicPeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicPeriodInclude<ExtArgs> | null
    /**
     * The filter to search for the AcademicPeriod to update in case it exists.
     */
    where: AcademicPeriodWhereUniqueInput
    /**
     * In case the AcademicPeriod found by the `where` argument doesn't exist, create a new AcademicPeriod with this data.
     */
    create: XOR<AcademicPeriodCreateInput, AcademicPeriodUncheckedCreateInput>
    /**
     * In case the AcademicPeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicPeriodUpdateInput, AcademicPeriodUncheckedUpdateInput>
  }

  /**
   * AcademicPeriod delete
   */
  export type AcademicPeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicPeriodInclude<ExtArgs> | null
    /**
     * Filter which AcademicPeriod to delete.
     */
    where: AcademicPeriodWhereUniqueInput
  }

  /**
   * AcademicPeriod deleteMany
   */
  export type AcademicPeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicPeriods to delete
     */
    where?: AcademicPeriodWhereInput
    /**
     * Limit how many AcademicPeriods to delete.
     */
    limit?: number
  }

  /**
   * AcademicPeriod.enrollments
   */
  export type AcademicPeriod$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * AcademicPeriod without action
   */
  export type AcademicPeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicPeriod
     */
    select?: AcademicPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicPeriod
     */
    omit?: AcademicPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicPeriodInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    academicPeriodId: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    academicPeriodId: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    academicPeriodId: number | null
    enrolledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    academicPeriodId: number | null
    enrolledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    studentId: number
    subjectId: number
    academicPeriodId: number
    enrolledAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    academicPeriodId?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    academicPeriodId?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    academicPeriodId?: true
    enrolledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    academicPeriodId?: true
    enrolledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    academicPeriodId?: true
    enrolledAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: number
    studentId: number
    subjectId: number
    academicPeriodId: number
    enrolledAt: Date
    createdAt: Date
    updatedAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    academicPeriodId?: boolean
    enrolledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    academicPeriod?: boolean | AcademicPeriodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    academicPeriodId?: boolean
    enrolledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    academicPeriod?: boolean | AcademicPeriodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    academicPeriodId?: boolean
    enrolledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    academicPeriod?: boolean | AcademicPeriodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    academicPeriodId?: boolean
    enrolledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subjectId" | "academicPeriodId" | "enrolledAt" | "createdAt" | "updatedAt", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    academicPeriod?: boolean | AcademicPeriodDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    academicPeriod?: boolean | AcademicPeriodDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    academicPeriod?: boolean | AcademicPeriodDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      academicPeriod: Prisma.$AcademicPeriodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      subjectId: number
      academicPeriodId: number
      enrolledAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    academicPeriod<T extends AcademicPeriodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AcademicPeriodDefaultArgs<ExtArgs>>): Prisma__AcademicPeriodClient<$Result.GetResult<Prisma.$AcademicPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'Int'>
    readonly studentId: FieldRef<"Enrollment", 'Int'>
    readonly subjectId: FieldRef<"Enrollment", 'Int'>
    readonly academicPeriodId: FieldRef<"Enrollment", 'Int'>
    readonly enrolledAt: FieldRef<"Enrollment", 'DateTime'>
    readonly createdAt: FieldRef<"Enrollment", 'DateTime'>
    readonly updatedAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SpecialtyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpecialtyScalarFieldEnum = (typeof SpecialtyScalarFieldEnum)[keyof typeof SpecialtyScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    totalCycles: 'totalCycles',
    durationYears: 'durationYears',
    specialtyId: 'specialtyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const CycleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CycleScalarFieldEnum = (typeof CycleScalarFieldEnum)[keyof typeof CycleScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    credits: 'credits',
    maxQuota: 'maxQuota',
    availableQuota: 'availableQuota',
    careerId: 'careerId',
    cycleId: 'cycleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    isActive: 'isActive',
    employmentType: 'employmentType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const TeacherSubjectScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    subjectId: 'subjectId',
    createdAt: 'createdAt'
  };

  export type TeacherSubjectScalarFieldEnum = (typeof TeacherSubjectScalarFieldEnum)[keyof typeof TeacherSubjectScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    isActive: 'isActive',
    careerId: 'careerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StudentSubjectScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subjectId: 'subjectId',
    grade: 'grade',
    passed: 'passed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentSubjectScalarFieldEnum = (typeof StudentSubjectScalarFieldEnum)[keyof typeof StudentSubjectScalarFieldEnum]


  export const AcademicPeriodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AcademicPeriodScalarFieldEnum = (typeof AcademicPeriodScalarFieldEnum)[keyof typeof AcademicPeriodScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subjectId: 'subjectId',
    academicPeriodId: 'academicPeriodId',
    enrolledAt: 'enrolledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EmploymentType'
   */
  export type EnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType'>
    


  /**
   * Reference to a field of type 'EmploymentType[]'
   */
  export type ListEnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SpecialtyWhereInput = {
    AND?: SpecialtyWhereInput | SpecialtyWhereInput[]
    OR?: SpecialtyWhereInput[]
    NOT?: SpecialtyWhereInput | SpecialtyWhereInput[]
    id?: IntFilter<"Specialty"> | number
    name?: StringFilter<"Specialty"> | string
    description?: StringNullableFilter<"Specialty"> | string | null
    createdAt?: DateTimeFilter<"Specialty"> | Date | string
    updatedAt?: DateTimeFilter<"Specialty"> | Date | string
    careers?: CareerListRelationFilter
  }

  export type SpecialtyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    careers?: CareerOrderByRelationAggregateInput
  }

  export type SpecialtyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SpecialtyWhereInput | SpecialtyWhereInput[]
    OR?: SpecialtyWhereInput[]
    NOT?: SpecialtyWhereInput | SpecialtyWhereInput[]
    description?: StringNullableFilter<"Specialty"> | string | null
    createdAt?: DateTimeFilter<"Specialty"> | Date | string
    updatedAt?: DateTimeFilter<"Specialty"> | Date | string
    careers?: CareerListRelationFilter
  }, "id" | "name">

  export type SpecialtyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpecialtyCountOrderByAggregateInput
    _avg?: SpecialtyAvgOrderByAggregateInput
    _max?: SpecialtyMaxOrderByAggregateInput
    _min?: SpecialtyMinOrderByAggregateInput
    _sum?: SpecialtySumOrderByAggregateInput
  }

  export type SpecialtyScalarWhereWithAggregatesInput = {
    AND?: SpecialtyScalarWhereWithAggregatesInput | SpecialtyScalarWhereWithAggregatesInput[]
    OR?: SpecialtyScalarWhereWithAggregatesInput[]
    NOT?: SpecialtyScalarWhereWithAggregatesInput | SpecialtyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Specialty"> | number
    name?: StringWithAggregatesFilter<"Specialty"> | string
    description?: StringNullableWithAggregatesFilter<"Specialty"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Specialty"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Specialty"> | Date | string
  }

  export type CareerWhereInput = {
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    id?: IntFilter<"Career"> | number
    name?: StringFilter<"Career"> | string
    totalCycles?: IntFilter<"Career"> | number
    durationYears?: IntFilter<"Career"> | number
    specialtyId?: IntFilter<"Career"> | number
    createdAt?: DateTimeFilter<"Career"> | Date | string
    updatedAt?: DateTimeFilter<"Career"> | Date | string
    specialty?: XOR<SpecialtyScalarRelationFilter, SpecialtyWhereInput>
    students?: StudentListRelationFilter
    subjects?: SubjectListRelationFilter
  }

  export type CareerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    totalCycles?: SortOrder
    durationYears?: SortOrder
    specialtyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    specialty?: SpecialtyOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
    subjects?: SubjectOrderByRelationAggregateInput
  }

  export type CareerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    totalCycles?: IntFilter<"Career"> | number
    durationYears?: IntFilter<"Career"> | number
    specialtyId?: IntFilter<"Career"> | number
    createdAt?: DateTimeFilter<"Career"> | Date | string
    updatedAt?: DateTimeFilter<"Career"> | Date | string
    specialty?: XOR<SpecialtyScalarRelationFilter, SpecialtyWhereInput>
    students?: StudentListRelationFilter
    subjects?: SubjectListRelationFilter
  }, "id" | "name">

  export type CareerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    totalCycles?: SortOrder
    durationYears?: SortOrder
    specialtyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CareerCountOrderByAggregateInput
    _avg?: CareerAvgOrderByAggregateInput
    _max?: CareerMaxOrderByAggregateInput
    _min?: CareerMinOrderByAggregateInput
    _sum?: CareerSumOrderByAggregateInput
  }

  export type CareerScalarWhereWithAggregatesInput = {
    AND?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    OR?: CareerScalarWhereWithAggregatesInput[]
    NOT?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Career"> | number
    name?: StringWithAggregatesFilter<"Career"> | string
    totalCycles?: IntWithAggregatesFilter<"Career"> | number
    durationYears?: IntWithAggregatesFilter<"Career"> | number
    specialtyId?: IntWithAggregatesFilter<"Career"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Career"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Career"> | Date | string
  }

  export type CycleWhereInput = {
    AND?: CycleWhereInput | CycleWhereInput[]
    OR?: CycleWhereInput[]
    NOT?: CycleWhereInput | CycleWhereInput[]
    id?: IntFilter<"Cycle"> | number
    name?: StringFilter<"Cycle"> | string
    number?: IntFilter<"Cycle"> | number
    createdAt?: DateTimeFilter<"Cycle"> | Date | string
    updatedAt?: DateTimeFilter<"Cycle"> | Date | string
    subjects?: SubjectListRelationFilter
  }

  export type CycleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subjects?: SubjectOrderByRelationAggregateInput
  }

  export type CycleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    number?: number
    AND?: CycleWhereInput | CycleWhereInput[]
    OR?: CycleWhereInput[]
    NOT?: CycleWhereInput | CycleWhereInput[]
    createdAt?: DateTimeFilter<"Cycle"> | Date | string
    updatedAt?: DateTimeFilter<"Cycle"> | Date | string
    subjects?: SubjectListRelationFilter
  }, "id" | "name" | "number">

  export type CycleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CycleCountOrderByAggregateInput
    _avg?: CycleAvgOrderByAggregateInput
    _max?: CycleMaxOrderByAggregateInput
    _min?: CycleMinOrderByAggregateInput
    _sum?: CycleSumOrderByAggregateInput
  }

  export type CycleScalarWhereWithAggregatesInput = {
    AND?: CycleScalarWhereWithAggregatesInput | CycleScalarWhereWithAggregatesInput[]
    OR?: CycleScalarWhereWithAggregatesInput[]
    NOT?: CycleScalarWhereWithAggregatesInput | CycleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cycle"> | number
    name?: StringWithAggregatesFilter<"Cycle"> | string
    number?: IntWithAggregatesFilter<"Cycle"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cycle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cycle"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    credits?: IntFilter<"Subject"> | number
    maxQuota?: IntFilter<"Subject"> | number
    availableQuota?: IntFilter<"Subject"> | number
    careerId?: IntFilter<"Subject"> | number
    cycleId?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    cycle?: XOR<CycleScalarRelationFilter, CycleWhereInput>
    students?: StudentSubjectListRelationFilter
    teachers?: TeacherSubjectListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    maxQuota?: SortOrder
    availableQuota?: SortOrder
    careerId?: SortOrder
    cycleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    career?: CareerOrderByWithRelationInput
    cycle?: CycleOrderByWithRelationInput
    students?: StudentSubjectOrderByRelationAggregateInput
    teachers?: TeacherSubjectOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    careerId_cycleId_name?: SubjectCareerIdCycleIdNameCompoundUniqueInput
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    name?: StringFilter<"Subject"> | string
    credits?: IntFilter<"Subject"> | number
    maxQuota?: IntFilter<"Subject"> | number
    availableQuota?: IntFilter<"Subject"> | number
    careerId?: IntFilter<"Subject"> | number
    cycleId?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    cycle?: XOR<CycleScalarRelationFilter, CycleWhereInput>
    students?: StudentSubjectListRelationFilter
    teachers?: TeacherSubjectListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }, "id" | "careerId_cycleId_name">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    maxQuota?: SortOrder
    availableQuota?: SortOrder
    careerId?: SortOrder
    cycleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    name?: StringWithAggregatesFilter<"Subject"> | string
    credits?: IntWithAggregatesFilter<"Subject"> | number
    maxQuota?: IntWithAggregatesFilter<"Subject"> | number
    availableQuota?: IntWithAggregatesFilter<"Subject"> | number
    careerId?: IntWithAggregatesFilter<"Subject"> | number
    cycleId?: IntWithAggregatesFilter<"Subject"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    userId?: IntFilter<"Teacher"> | number
    firstName?: StringFilter<"Teacher"> | string
    lastName?: StringFilter<"Teacher"> | string
    email?: StringFilter<"Teacher"> | string
    phone?: StringNullableFilter<"Teacher"> | string | null
    isActive?: BoolFilter<"Teacher"> | boolean
    employmentType?: EnumEmploymentTypeFilter<"Teacher"> | $Enums.EmploymentType
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    subjects?: TeacherSubjectListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    employmentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subjects?: TeacherSubjectOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    email?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    firstName?: StringFilter<"Teacher"> | string
    lastName?: StringFilter<"Teacher"> | string
    phone?: StringNullableFilter<"Teacher"> | string | null
    isActive?: BoolFilter<"Teacher"> | boolean
    employmentType?: EnumEmploymentTypeFilter<"Teacher"> | $Enums.EmploymentType
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    subjects?: TeacherSubjectListRelationFilter
  }, "id" | "userId" | "email">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    employmentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    userId?: IntWithAggregatesFilter<"Teacher"> | number
    firstName?: StringWithAggregatesFilter<"Teacher"> | string
    lastName?: StringWithAggregatesFilter<"Teacher"> | string
    email?: StringWithAggregatesFilter<"Teacher"> | string
    phone?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    isActive?: BoolWithAggregatesFilter<"Teacher"> | boolean
    employmentType?: EnumEmploymentTypeWithAggregatesFilter<"Teacher"> | $Enums.EmploymentType
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type TeacherSubjectWhereInput = {
    AND?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    OR?: TeacherSubjectWhereInput[]
    NOT?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    id?: IntFilter<"TeacherSubject"> | number
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
    createdAt?: DateTimeFilter<"TeacherSubject"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type TeacherSubjectOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
  }

  export type TeacherSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teacherId_subjectId?: TeacherSubjectTeacherIdSubjectIdCompoundUniqueInput
    AND?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    OR?: TeacherSubjectWhereInput[]
    NOT?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
    createdAt?: DateTimeFilter<"TeacherSubject"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id" | "teacherId_subjectId">

  export type TeacherSubjectOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
    _count?: TeacherSubjectCountOrderByAggregateInput
    _avg?: TeacherSubjectAvgOrderByAggregateInput
    _max?: TeacherSubjectMaxOrderByAggregateInput
    _min?: TeacherSubjectMinOrderByAggregateInput
    _sum?: TeacherSubjectSumOrderByAggregateInput
  }

  export type TeacherSubjectScalarWhereWithAggregatesInput = {
    AND?: TeacherSubjectScalarWhereWithAggregatesInput | TeacherSubjectScalarWhereWithAggregatesInput[]
    OR?: TeacherSubjectScalarWhereWithAggregatesInput[]
    NOT?: TeacherSubjectScalarWhereWithAggregatesInput | TeacherSubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherSubject"> | number
    teacherId?: IntWithAggregatesFilter<"TeacherSubject"> | number
    subjectId?: IntWithAggregatesFilter<"TeacherSubject"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TeacherSubject"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    userId?: IntFilter<"Student"> | number
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    careerId?: IntFilter<"Student"> | number
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    subjects?: StudentSubjectListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    careerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    career?: CareerOrderByWithRelationInput
    subjects?: StudentSubjectOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    careerId?: IntFilter<"Student"> | number
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    subjects?: StudentSubjectListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }, "id" | "userId" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    careerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    userId?: IntWithAggregatesFilter<"Student"> | number
    firstName?: StringWithAggregatesFilter<"Student"> | string
    lastName?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    isActive?: BoolWithAggregatesFilter<"Student"> | boolean
    careerId?: IntWithAggregatesFilter<"Student"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type StudentSubjectWhereInput = {
    AND?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    OR?: StudentSubjectWhereInput[]
    NOT?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    id?: IntFilter<"StudentSubject"> | number
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    grade?: FloatNullableFilter<"StudentSubject"> | number | null
    passed?: BoolFilter<"StudentSubject"> | boolean
    createdAt?: DateTimeFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSubject"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type StudentSubjectOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrderInput | SortOrder
    passed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type StudentSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_subjectId?: StudentSubjectStudentIdSubjectIdCompoundUniqueInput
    AND?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    OR?: StudentSubjectWhereInput[]
    NOT?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    grade?: FloatNullableFilter<"StudentSubject"> | number | null
    passed?: BoolFilter<"StudentSubject"> | boolean
    createdAt?: DateTimeFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSubject"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "id" | "studentId_subjectId">

  export type StudentSubjectOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrderInput | SortOrder
    passed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentSubjectCountOrderByAggregateInput
    _avg?: StudentSubjectAvgOrderByAggregateInput
    _max?: StudentSubjectMaxOrderByAggregateInput
    _min?: StudentSubjectMinOrderByAggregateInput
    _sum?: StudentSubjectSumOrderByAggregateInput
  }

  export type StudentSubjectScalarWhereWithAggregatesInput = {
    AND?: StudentSubjectScalarWhereWithAggregatesInput | StudentSubjectScalarWhereWithAggregatesInput[]
    OR?: StudentSubjectScalarWhereWithAggregatesInput[]
    NOT?: StudentSubjectScalarWhereWithAggregatesInput | StudentSubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentSubject"> | number
    studentId?: IntWithAggregatesFilter<"StudentSubject"> | number
    subjectId?: IntWithAggregatesFilter<"StudentSubject"> | number
    grade?: FloatNullableWithAggregatesFilter<"StudentSubject"> | number | null
    passed?: BoolWithAggregatesFilter<"StudentSubject"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentSubject"> | Date | string
  }

  export type AcademicPeriodWhereInput = {
    AND?: AcademicPeriodWhereInput | AcademicPeriodWhereInput[]
    OR?: AcademicPeriodWhereInput[]
    NOT?: AcademicPeriodWhereInput | AcademicPeriodWhereInput[]
    id?: IntFilter<"AcademicPeriod"> | number
    name?: StringFilter<"AcademicPeriod"> | string
    startDate?: DateTimeFilter<"AcademicPeriod"> | Date | string
    endDate?: DateTimeFilter<"AcademicPeriod"> | Date | string
    isActive?: BoolFilter<"AcademicPeriod"> | boolean
    createdAt?: DateTimeFilter<"AcademicPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"AcademicPeriod"> | Date | string
    enrollments?: EnrollmentListRelationFilter
  }

  export type AcademicPeriodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type AcademicPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AcademicPeriodWhereInput | AcademicPeriodWhereInput[]
    OR?: AcademicPeriodWhereInput[]
    NOT?: AcademicPeriodWhereInput | AcademicPeriodWhereInput[]
    startDate?: DateTimeFilter<"AcademicPeriod"> | Date | string
    endDate?: DateTimeFilter<"AcademicPeriod"> | Date | string
    isActive?: BoolFilter<"AcademicPeriod"> | boolean
    createdAt?: DateTimeFilter<"AcademicPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"AcademicPeriod"> | Date | string
    enrollments?: EnrollmentListRelationFilter
  }, "id" | "name">

  export type AcademicPeriodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AcademicPeriodCountOrderByAggregateInput
    _avg?: AcademicPeriodAvgOrderByAggregateInput
    _max?: AcademicPeriodMaxOrderByAggregateInput
    _min?: AcademicPeriodMinOrderByAggregateInput
    _sum?: AcademicPeriodSumOrderByAggregateInput
  }

  export type AcademicPeriodScalarWhereWithAggregatesInput = {
    AND?: AcademicPeriodScalarWhereWithAggregatesInput | AcademicPeriodScalarWhereWithAggregatesInput[]
    OR?: AcademicPeriodScalarWhereWithAggregatesInput[]
    NOT?: AcademicPeriodScalarWhereWithAggregatesInput | AcademicPeriodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AcademicPeriod"> | number
    name?: StringWithAggregatesFilter<"AcademicPeriod"> | string
    startDate?: DateTimeWithAggregatesFilter<"AcademicPeriod"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"AcademicPeriod"> | Date | string
    isActive?: BoolWithAggregatesFilter<"AcademicPeriod"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AcademicPeriod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AcademicPeriod"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    studentId?: IntFilter<"Enrollment"> | number
    subjectId?: IntFilter<"Enrollment"> | number
    academicPeriodId?: IntFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    academicPeriod?: XOR<AcademicPeriodScalarRelationFilter, AcademicPeriodWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicPeriodId?: SortOrder
    enrolledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    academicPeriod?: AcademicPeriodOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_subjectId_academicPeriodId?: EnrollmentStudentIdSubjectIdAcademicPeriodIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    studentId?: IntFilter<"Enrollment"> | number
    subjectId?: IntFilter<"Enrollment"> | number
    academicPeriodId?: IntFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    academicPeriod?: XOR<AcademicPeriodScalarRelationFilter, AcademicPeriodWhereInput>
  }, "id" | "studentId_subjectId_academicPeriodId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicPeriodId?: SortOrder
    enrolledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enrollment"> | number
    studentId?: IntWithAggregatesFilter<"Enrollment"> | number
    subjectId?: IntWithAggregatesFilter<"Enrollment"> | number
    academicPeriodId?: IntWithAggregatesFilter<"Enrollment"> | number
    enrolledAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
  }

  export type SpecialtyCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    careers?: CareerCreateNestedManyWithoutSpecialtyInput
  }

  export type SpecialtyUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    careers?: CareerUncheckedCreateNestedManyWithoutSpecialtyInput
  }

  export type SpecialtyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careers?: CareerUpdateManyWithoutSpecialtyNestedInput
  }

  export type SpecialtyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careers?: CareerUncheckedUpdateManyWithoutSpecialtyNestedInput
  }

  export type SpecialtyCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialtyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialtyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerCreateInput = {
    name: string
    totalCycles: number
    durationYears: number
    createdAt?: Date | string
    updatedAt?: Date | string
    specialty: SpecialtyCreateNestedOneWithoutCareersInput
    students?: StudentCreateNestedManyWithoutCareerInput
    subjects?: SubjectCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateInput = {
    id?: number
    name: string
    totalCycles: number
    durationYears: number
    specialtyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutCareerInput
    subjects?: SubjectUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialty?: SpecialtyUpdateOneRequiredWithoutCareersNestedInput
    students?: StudentUpdateManyWithoutCareerNestedInput
    subjects?: SubjectUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    specialtyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutCareerNestedInput
    subjects?: SubjectUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareerCreateManyInput = {
    id?: number
    name: string
    totalCycles: number
    durationYears: number
    specialtyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    specialtyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleCreateInput = {
    name: string
    number: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectCreateNestedManyWithoutCycleInput
  }

  export type CycleUncheckedCreateInput = {
    id?: number
    name: string
    number: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectUncheckedCreateNestedManyWithoutCycleInput
  }

  export type CycleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUpdateManyWithoutCycleNestedInput
  }

  export type CycleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type CycleCreateManyInput = {
    id?: number
    name: string
    number: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CycleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    career: CareerCreateNestedOneWithoutSubjectsInput
    cycle: CycleCreateNestedOneWithoutSubjectsInput
    students?: StudentSubjectCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    careerId: number
    cycleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneRequiredWithoutSubjectsNestedInput
    cycle?: CycleUpdateOneRequiredWithoutSubjectsNestedInput
    students?: StudentSubjectUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    cycleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: number
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    careerId: number
    cycleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    cycleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherCreateInput = {
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    employmentType?: $Enums.EmploymentType
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    employmentType?: $Enums.EmploymentType
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    employmentType?: $Enums.EmploymentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectCreateInput = {
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutTeachersInput
    teacher: TeacherCreateNestedOneWithoutSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateInput = {
    id?: number
    teacherId: number
    subjectId: number
    createdAt?: Date | string
  }

  export type TeacherSubjectUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutTeachersNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectCreateManyInput = {
    id?: number
    teacherId: number
    subjectId: number
    createdAt?: Date | string
  }

  export type TeacherSubjectUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    career: CareerCreateNestedOneWithoutStudentsInput
    subjects?: StudentSubjectCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneRequiredWithoutStudentsNestedInput
    subjects?: StudentSubjectUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateInput = {
    grade?: number | null
    passed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutStudentsInput
  }

  export type StudentSubjectUncheckedCreateInput = {
    id?: number
    studentId: number
    subjectId: number
    grade?: number | null
    passed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectUpdateInput = {
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentSubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateManyInput = {
    id?: number
    studentId: number
    subjectId: number
    grade?: number | null
    passed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectUpdateManyMutationInput = {
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicPeriodCreateInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutAcademicPeriodInput
  }

  export type AcademicPeriodUncheckedCreateInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutAcademicPeriodInput
  }

  export type AcademicPeriodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutAcademicPeriodNestedInput
  }

  export type AcademicPeriodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutAcademicPeriodNestedInput
  }

  export type AcademicPeriodCreateManyInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicPeriodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicPeriodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    subject: SubjectCreateNestedOneWithoutEnrollmentsInput
    academicPeriod: AcademicPeriodCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    studentId: number
    subjectId: number
    academicPeriodId: number
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutEnrollmentsNestedInput
    academicPeriod?: AcademicPeriodUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicPeriodId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    studentId: number
    subjectId: number
    academicPeriodId: number
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicPeriodId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CareerListRelationFilter = {
    every?: CareerWhereInput
    some?: CareerWhereInput
    none?: CareerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CareerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialtyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialtyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecialtyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialtyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialtySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SpecialtyScalarRelationFilter = {
    is?: SpecialtyWhereInput
    isNot?: SpecialtyWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalCycles?: SortOrder
    durationYears?: SortOrder
    specialtyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerAvgOrderByAggregateInput = {
    id?: SortOrder
    totalCycles?: SortOrder
    durationYears?: SortOrder
    specialtyId?: SortOrder
  }

  export type CareerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalCycles?: SortOrder
    durationYears?: SortOrder
    specialtyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalCycles?: SortOrder
    durationYears?: SortOrder
    specialtyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerSumOrderByAggregateInput = {
    id?: SortOrder
    totalCycles?: SortOrder
    durationYears?: SortOrder
    specialtyId?: SortOrder
  }

  export type CycleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CycleAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type CycleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CycleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CycleSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type CareerScalarRelationFilter = {
    is?: CareerWhereInput
    isNot?: CareerWhereInput
  }

  export type CycleScalarRelationFilter = {
    is?: CycleWhereInput
    isNot?: CycleWhereInput
  }

  export type StudentSubjectListRelationFilter = {
    every?: StudentSubjectWhereInput
    some?: StudentSubjectWhereInput
    none?: StudentSubjectWhereInput
  }

  export type TeacherSubjectListRelationFilter = {
    every?: TeacherSubjectWhereInput
    some?: TeacherSubjectWhereInput
    none?: TeacherSubjectWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type StudentSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCareerIdCycleIdNameCompoundUniqueInput = {
    careerId: number
    cycleId: number
    name: string
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    maxQuota?: SortOrder
    availableQuota?: SortOrder
    careerId?: SortOrder
    cycleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    maxQuota?: SortOrder
    availableQuota?: SortOrder
    careerId?: SortOrder
    cycleId?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    maxQuota?: SortOrder
    availableQuota?: SortOrder
    careerId?: SortOrder
    cycleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    maxQuota?: SortOrder
    availableQuota?: SortOrder
    careerId?: SortOrder
    cycleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    maxQuota?: SortOrder
    availableQuota?: SortOrder
    careerId?: SortOrder
    cycleId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    employmentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    employmentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    employmentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeFilter<$PrismaModel>
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type TeacherSubjectTeacherIdSubjectIdCompoundUniqueInput = {
    teacherId: number
    subjectId: number
  }

  export type TeacherSubjectCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherSubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherSubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherSubjectMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeacherSubjectSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    careerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    careerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    careerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentSubjectStudentIdSubjectIdCompoundUniqueInput = {
    studentId: number
    subjectId: number
  }

  export type StudentSubjectCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrder
    passed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrder
  }

  export type StudentSubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrder
    passed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSubjectMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrder
    passed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSubjectSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    grade?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AcademicPeriodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicPeriodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcademicPeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicPeriodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicPeriodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcademicPeriodScalarRelationFilter = {
    is?: AcademicPeriodWhereInput
    isNot?: AcademicPeriodWhereInput
  }

  export type EnrollmentStudentIdSubjectIdAcademicPeriodIdCompoundUniqueInput = {
    studentId: number
    subjectId: number
    academicPeriodId: number
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicPeriodId?: SortOrder
    enrolledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicPeriodId?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicPeriodId?: SortOrder
    enrolledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicPeriodId?: SortOrder
    enrolledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicPeriodId?: SortOrder
  }

  export type CareerCreateNestedManyWithoutSpecialtyInput = {
    create?: XOR<CareerCreateWithoutSpecialtyInput, CareerUncheckedCreateWithoutSpecialtyInput> | CareerCreateWithoutSpecialtyInput[] | CareerUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutSpecialtyInput | CareerCreateOrConnectWithoutSpecialtyInput[]
    createMany?: CareerCreateManySpecialtyInputEnvelope
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
  }

  export type CareerUncheckedCreateNestedManyWithoutSpecialtyInput = {
    create?: XOR<CareerCreateWithoutSpecialtyInput, CareerUncheckedCreateWithoutSpecialtyInput> | CareerCreateWithoutSpecialtyInput[] | CareerUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutSpecialtyInput | CareerCreateOrConnectWithoutSpecialtyInput[]
    createMany?: CareerCreateManySpecialtyInputEnvelope
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CareerUpdateManyWithoutSpecialtyNestedInput = {
    create?: XOR<CareerCreateWithoutSpecialtyInput, CareerUncheckedCreateWithoutSpecialtyInput> | CareerCreateWithoutSpecialtyInput[] | CareerUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutSpecialtyInput | CareerCreateOrConnectWithoutSpecialtyInput[]
    upsert?: CareerUpsertWithWhereUniqueWithoutSpecialtyInput | CareerUpsertWithWhereUniqueWithoutSpecialtyInput[]
    createMany?: CareerCreateManySpecialtyInputEnvelope
    set?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    disconnect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    delete?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    update?: CareerUpdateWithWhereUniqueWithoutSpecialtyInput | CareerUpdateWithWhereUniqueWithoutSpecialtyInput[]
    updateMany?: CareerUpdateManyWithWhereWithoutSpecialtyInput | CareerUpdateManyWithWhereWithoutSpecialtyInput[]
    deleteMany?: CareerScalarWhereInput | CareerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CareerUncheckedUpdateManyWithoutSpecialtyNestedInput = {
    create?: XOR<CareerCreateWithoutSpecialtyInput, CareerUncheckedCreateWithoutSpecialtyInput> | CareerCreateWithoutSpecialtyInput[] | CareerUncheckedCreateWithoutSpecialtyInput[]
    connectOrCreate?: CareerCreateOrConnectWithoutSpecialtyInput | CareerCreateOrConnectWithoutSpecialtyInput[]
    upsert?: CareerUpsertWithWhereUniqueWithoutSpecialtyInput | CareerUpsertWithWhereUniqueWithoutSpecialtyInput[]
    createMany?: CareerCreateManySpecialtyInputEnvelope
    set?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    disconnect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    delete?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    connect?: CareerWhereUniqueInput | CareerWhereUniqueInput[]
    update?: CareerUpdateWithWhereUniqueWithoutSpecialtyInput | CareerUpdateWithWhereUniqueWithoutSpecialtyInput[]
    updateMany?: CareerUpdateManyWithWhereWithoutSpecialtyInput | CareerUpdateManyWithWhereWithoutSpecialtyInput[]
    deleteMany?: CareerScalarWhereInput | CareerScalarWhereInput[]
  }

  export type SpecialtyCreateNestedOneWithoutCareersInput = {
    create?: XOR<SpecialtyCreateWithoutCareersInput, SpecialtyUncheckedCreateWithoutCareersInput>
    connectOrCreate?: SpecialtyCreateOrConnectWithoutCareersInput
    connect?: SpecialtyWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutCareerInput = {
    create?: XOR<StudentCreateWithoutCareerInput, StudentUncheckedCreateWithoutCareerInput> | StudentCreateWithoutCareerInput[] | StudentUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCareerInput | StudentCreateOrConnectWithoutCareerInput[]
    createMany?: StudentCreateManyCareerInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutCareerInput = {
    create?: XOR<SubjectCreateWithoutCareerInput, SubjectUncheckedCreateWithoutCareerInput> | SubjectCreateWithoutCareerInput[] | SubjectUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCareerInput | SubjectCreateOrConnectWithoutCareerInput[]
    createMany?: SubjectCreateManyCareerInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<StudentCreateWithoutCareerInput, StudentUncheckedCreateWithoutCareerInput> | StudentCreateWithoutCareerInput[] | StudentUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCareerInput | StudentCreateOrConnectWithoutCareerInput[]
    createMany?: StudentCreateManyCareerInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<SubjectCreateWithoutCareerInput, SubjectUncheckedCreateWithoutCareerInput> | SubjectCreateWithoutCareerInput[] | SubjectUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCareerInput | SubjectCreateOrConnectWithoutCareerInput[]
    createMany?: SubjectCreateManyCareerInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SpecialtyUpdateOneRequiredWithoutCareersNestedInput = {
    create?: XOR<SpecialtyCreateWithoutCareersInput, SpecialtyUncheckedCreateWithoutCareersInput>
    connectOrCreate?: SpecialtyCreateOrConnectWithoutCareersInput
    upsert?: SpecialtyUpsertWithoutCareersInput
    connect?: SpecialtyWhereUniqueInput
    update?: XOR<XOR<SpecialtyUpdateToOneWithWhereWithoutCareersInput, SpecialtyUpdateWithoutCareersInput>, SpecialtyUncheckedUpdateWithoutCareersInput>
  }

  export type StudentUpdateManyWithoutCareerNestedInput = {
    create?: XOR<StudentCreateWithoutCareerInput, StudentUncheckedCreateWithoutCareerInput> | StudentCreateWithoutCareerInput[] | StudentUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCareerInput | StudentCreateOrConnectWithoutCareerInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutCareerInput | StudentUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: StudentCreateManyCareerInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutCareerInput | StudentUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutCareerInput | StudentUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutCareerNestedInput = {
    create?: XOR<SubjectCreateWithoutCareerInput, SubjectUncheckedCreateWithoutCareerInput> | SubjectCreateWithoutCareerInput[] | SubjectUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCareerInput | SubjectCreateOrConnectWithoutCareerInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutCareerInput | SubjectUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: SubjectCreateManyCareerInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutCareerInput | SubjectUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutCareerInput | SubjectUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<StudentCreateWithoutCareerInput, StudentUncheckedCreateWithoutCareerInput> | StudentCreateWithoutCareerInput[] | StudentUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCareerInput | StudentCreateOrConnectWithoutCareerInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutCareerInput | StudentUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: StudentCreateManyCareerInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutCareerInput | StudentUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutCareerInput | StudentUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<SubjectCreateWithoutCareerInput, SubjectUncheckedCreateWithoutCareerInput> | SubjectCreateWithoutCareerInput[] | SubjectUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCareerInput | SubjectCreateOrConnectWithoutCareerInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutCareerInput | SubjectUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: SubjectCreateManyCareerInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutCareerInput | SubjectUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutCareerInput | SubjectUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectCreateNestedManyWithoutCycleInput = {
    create?: XOR<SubjectCreateWithoutCycleInput, SubjectUncheckedCreateWithoutCycleInput> | SubjectCreateWithoutCycleInput[] | SubjectUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCycleInput | SubjectCreateOrConnectWithoutCycleInput[]
    createMany?: SubjectCreateManyCycleInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutCycleInput = {
    create?: XOR<SubjectCreateWithoutCycleInput, SubjectUncheckedCreateWithoutCycleInput> | SubjectCreateWithoutCycleInput[] | SubjectUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCycleInput | SubjectCreateOrConnectWithoutCycleInput[]
    createMany?: SubjectCreateManyCycleInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectUpdateManyWithoutCycleNestedInput = {
    create?: XOR<SubjectCreateWithoutCycleInput, SubjectUncheckedCreateWithoutCycleInput> | SubjectCreateWithoutCycleInput[] | SubjectUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCycleInput | SubjectCreateOrConnectWithoutCycleInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutCycleInput | SubjectUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: SubjectCreateManyCycleInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutCycleInput | SubjectUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutCycleInput | SubjectUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: XOR<SubjectCreateWithoutCycleInput, SubjectUncheckedCreateWithoutCycleInput> | SubjectCreateWithoutCycleInput[] | SubjectUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutCycleInput | SubjectCreateOrConnectWithoutCycleInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutCycleInput | SubjectUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: SubjectCreateManyCycleInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutCycleInput | SubjectUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutCycleInput | SubjectUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type CareerCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<CareerCreateWithoutSubjectsInput, CareerUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: CareerCreateOrConnectWithoutSubjectsInput
    connect?: CareerWhereUniqueInput
  }

  export type CycleCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<CycleCreateWithoutSubjectsInput, CycleUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: CycleCreateOrConnectWithoutSubjectsInput
    connect?: CycleWhereUniqueInput
  }

  export type StudentSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutSubjectInput = {
    create?: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput> | EnrollmentCreateWithoutSubjectInput[] | EnrollmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubjectInput | EnrollmentCreateOrConnectWithoutSubjectInput[]
    createMany?: EnrollmentCreateManySubjectInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput> | EnrollmentCreateWithoutSubjectInput[] | EnrollmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubjectInput | EnrollmentCreateOrConnectWithoutSubjectInput[]
    createMany?: EnrollmentCreateManySubjectInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CareerUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<CareerCreateWithoutSubjectsInput, CareerUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: CareerCreateOrConnectWithoutSubjectsInput
    upsert?: CareerUpsertWithoutSubjectsInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutSubjectsInput, CareerUpdateWithoutSubjectsInput>, CareerUncheckedUpdateWithoutSubjectsInput>
  }

  export type CycleUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<CycleCreateWithoutSubjectsInput, CycleUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: CycleCreateOrConnectWithoutSubjectsInput
    upsert?: CycleUpsertWithoutSubjectsInput
    connect?: CycleWhereUniqueInput
    update?: XOR<XOR<CycleUpdateToOneWithWhereWithoutSubjectsInput, CycleUpdateWithoutSubjectsInput>, CycleUncheckedUpdateWithoutSubjectsInput>
  }

  export type StudentSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput | StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput | StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutSubjectInput | StudentSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type TeacherSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSubjectInput | TeacherSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput> | EnrollmentCreateWithoutSubjectInput[] | EnrollmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubjectInput | EnrollmentCreateOrConnectWithoutSubjectInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutSubjectInput | EnrollmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: EnrollmentCreateManySubjectInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutSubjectInput | EnrollmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutSubjectInput | EnrollmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput | StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput | StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutSubjectInput | StudentSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSubjectInput | TeacherSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput> | EnrollmentCreateWithoutSubjectInput[] | EnrollmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubjectInput | EnrollmentCreateOrConnectWithoutSubjectInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutSubjectInput | EnrollmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: EnrollmentCreateManySubjectInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutSubjectInput | EnrollmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutSubjectInput | EnrollmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type TeacherSubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumEmploymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentType
  }

  export type TeacherSubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutTeacherInput | TeacherSubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutTeacherInput | TeacherSubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type SubjectCreateNestedOneWithoutTeachersInput = {
    create?: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachersInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
  }

  export type SubjectUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachersInput
    upsert?: SubjectUpsertWithoutTeachersInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTeachersInput, SubjectUpdateWithoutTeachersInput>, SubjectUncheckedUpdateWithoutTeachersInput>
  }

  export type TeacherUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    upsert?: TeacherUpsertWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSubjectsInput, TeacherUpdateWithoutSubjectsInput>, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type CareerCreateNestedOneWithoutStudentsInput = {
    create?: XOR<CareerCreateWithoutStudentsInput, CareerUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CareerCreateOrConnectWithoutStudentsInput
    connect?: CareerWhereUniqueInput
  }

  export type StudentSubjectCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type StudentSubjectUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CareerUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<CareerCreateWithoutStudentsInput, CareerUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CareerCreateOrConnectWithoutStudentsInput
    upsert?: CareerUpsertWithoutStudentsInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutStudentsInput, CareerUpdateWithoutStudentsInput>, CareerUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentSubjectUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutStudentInput | StudentSubjectUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutStudentInput | StudentSubjectUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutStudentInput | StudentSubjectUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutStudentInput | StudentSubjectUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutStudentInput | StudentSubjectUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutStudentInput | StudentSubjectUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectsInput
    connect?: StudentWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutStudentsInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput
    connect?: SubjectWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectsInput
    upsert?: StudentUpsertWithoutSubjectsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSubjectsInput, StudentUpdateWithoutSubjectsInput>, StudentUncheckedUpdateWithoutSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput
    upsert?: SubjectUpsertWithoutStudentsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutStudentsInput, SubjectUpdateWithoutStudentsInput>, SubjectUncheckedUpdateWithoutStudentsInput>
  }

  export type EnrollmentCreateNestedManyWithoutAcademicPeriodInput = {
    create?: XOR<EnrollmentCreateWithoutAcademicPeriodInput, EnrollmentUncheckedCreateWithoutAcademicPeriodInput> | EnrollmentCreateWithoutAcademicPeriodInput[] | EnrollmentUncheckedCreateWithoutAcademicPeriodInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutAcademicPeriodInput | EnrollmentCreateOrConnectWithoutAcademicPeriodInput[]
    createMany?: EnrollmentCreateManyAcademicPeriodInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutAcademicPeriodInput = {
    create?: XOR<EnrollmentCreateWithoutAcademicPeriodInput, EnrollmentUncheckedCreateWithoutAcademicPeriodInput> | EnrollmentCreateWithoutAcademicPeriodInput[] | EnrollmentUncheckedCreateWithoutAcademicPeriodInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutAcademicPeriodInput | EnrollmentCreateOrConnectWithoutAcademicPeriodInput[]
    createMany?: EnrollmentCreateManyAcademicPeriodInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EnrollmentUpdateManyWithoutAcademicPeriodNestedInput = {
    create?: XOR<EnrollmentCreateWithoutAcademicPeriodInput, EnrollmentUncheckedCreateWithoutAcademicPeriodInput> | EnrollmentCreateWithoutAcademicPeriodInput[] | EnrollmentUncheckedCreateWithoutAcademicPeriodInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutAcademicPeriodInput | EnrollmentCreateOrConnectWithoutAcademicPeriodInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutAcademicPeriodInput | EnrollmentUpsertWithWhereUniqueWithoutAcademicPeriodInput[]
    createMany?: EnrollmentCreateManyAcademicPeriodInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutAcademicPeriodInput | EnrollmentUpdateWithWhereUniqueWithoutAcademicPeriodInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutAcademicPeriodInput | EnrollmentUpdateManyWithWhereWithoutAcademicPeriodInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutAcademicPeriodNestedInput = {
    create?: XOR<EnrollmentCreateWithoutAcademicPeriodInput, EnrollmentUncheckedCreateWithoutAcademicPeriodInput> | EnrollmentCreateWithoutAcademicPeriodInput[] | EnrollmentUncheckedCreateWithoutAcademicPeriodInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutAcademicPeriodInput | EnrollmentCreateOrConnectWithoutAcademicPeriodInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutAcademicPeriodInput | EnrollmentUpsertWithWhereUniqueWithoutAcademicPeriodInput[]
    createMany?: EnrollmentCreateManyAcademicPeriodInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutAcademicPeriodInput | EnrollmentUpdateWithWhereUniqueWithoutAcademicPeriodInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutAcademicPeriodInput | EnrollmentUpdateManyWithWhereWithoutAcademicPeriodInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrollmentsInput
    connect?: StudentWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<SubjectCreateWithoutEnrollmentsInput, SubjectUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutEnrollmentsInput
    connect?: SubjectWhereUniqueInput
  }

  export type AcademicPeriodCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<AcademicPeriodCreateWithoutEnrollmentsInput, AcademicPeriodUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: AcademicPeriodCreateOrConnectWithoutEnrollmentsInput
    connect?: AcademicPeriodWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrollmentsInput
    upsert?: StudentUpsertWithoutEnrollmentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutEnrollmentsInput, StudentUpdateWithoutEnrollmentsInput>, StudentUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type SubjectUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<SubjectCreateWithoutEnrollmentsInput, SubjectUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutEnrollmentsInput
    upsert?: SubjectUpsertWithoutEnrollmentsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutEnrollmentsInput, SubjectUpdateWithoutEnrollmentsInput>, SubjectUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type AcademicPeriodUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<AcademicPeriodCreateWithoutEnrollmentsInput, AcademicPeriodUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: AcademicPeriodCreateOrConnectWithoutEnrollmentsInput
    upsert?: AcademicPeriodUpsertWithoutEnrollmentsInput
    connect?: AcademicPeriodWhereUniqueInput
    update?: XOR<XOR<AcademicPeriodUpdateToOneWithWhereWithoutEnrollmentsInput, AcademicPeriodUpdateWithoutEnrollmentsInput>, AcademicPeriodUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CareerCreateWithoutSpecialtyInput = {
    name: string
    totalCycles: number
    durationYears: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutCareerInput
    subjects?: SubjectCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutSpecialtyInput = {
    id?: number
    name: string
    totalCycles: number
    durationYears: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutCareerInput
    subjects?: SubjectUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutSpecialtyInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutSpecialtyInput, CareerUncheckedCreateWithoutSpecialtyInput>
  }

  export type CareerCreateManySpecialtyInputEnvelope = {
    data: CareerCreateManySpecialtyInput | CareerCreateManySpecialtyInput[]
    skipDuplicates?: boolean
  }

  export type CareerUpsertWithWhereUniqueWithoutSpecialtyInput = {
    where: CareerWhereUniqueInput
    update: XOR<CareerUpdateWithoutSpecialtyInput, CareerUncheckedUpdateWithoutSpecialtyInput>
    create: XOR<CareerCreateWithoutSpecialtyInput, CareerUncheckedCreateWithoutSpecialtyInput>
  }

  export type CareerUpdateWithWhereUniqueWithoutSpecialtyInput = {
    where: CareerWhereUniqueInput
    data: XOR<CareerUpdateWithoutSpecialtyInput, CareerUncheckedUpdateWithoutSpecialtyInput>
  }

  export type CareerUpdateManyWithWhereWithoutSpecialtyInput = {
    where: CareerScalarWhereInput
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyWithoutSpecialtyInput>
  }

  export type CareerScalarWhereInput = {
    AND?: CareerScalarWhereInput | CareerScalarWhereInput[]
    OR?: CareerScalarWhereInput[]
    NOT?: CareerScalarWhereInput | CareerScalarWhereInput[]
    id?: IntFilter<"Career"> | number
    name?: StringFilter<"Career"> | string
    totalCycles?: IntFilter<"Career"> | number
    durationYears?: IntFilter<"Career"> | number
    specialtyId?: IntFilter<"Career"> | number
    createdAt?: DateTimeFilter<"Career"> | Date | string
    updatedAt?: DateTimeFilter<"Career"> | Date | string
  }

  export type SpecialtyCreateWithoutCareersInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialtyUncheckedCreateWithoutCareersInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialtyCreateOrConnectWithoutCareersInput = {
    where: SpecialtyWhereUniqueInput
    create: XOR<SpecialtyCreateWithoutCareersInput, SpecialtyUncheckedCreateWithoutCareersInput>
  }

  export type StudentCreateWithoutCareerInput = {
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: StudentSubjectCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutCareerInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutCareerInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCareerInput, StudentUncheckedCreateWithoutCareerInput>
  }

  export type StudentCreateManyCareerInputEnvelope = {
    data: StudentCreateManyCareerInput | StudentCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutCareerInput = {
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cycle: CycleCreateNestedOneWithoutSubjectsInput
    students?: StudentSubjectCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutCareerInput = {
    id?: number
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    cycleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutCareerInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutCareerInput, SubjectUncheckedCreateWithoutCareerInput>
  }

  export type SubjectCreateManyCareerInputEnvelope = {
    data: SubjectCreateManyCareerInput | SubjectCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type SpecialtyUpsertWithoutCareersInput = {
    update: XOR<SpecialtyUpdateWithoutCareersInput, SpecialtyUncheckedUpdateWithoutCareersInput>
    create: XOR<SpecialtyCreateWithoutCareersInput, SpecialtyUncheckedCreateWithoutCareersInput>
    where?: SpecialtyWhereInput
  }

  export type SpecialtyUpdateToOneWithWhereWithoutCareersInput = {
    where?: SpecialtyWhereInput
    data: XOR<SpecialtyUpdateWithoutCareersInput, SpecialtyUncheckedUpdateWithoutCareersInput>
  }

  export type SpecialtyUpdateWithoutCareersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialtyUncheckedUpdateWithoutCareersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutCareerInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutCareerInput, StudentUncheckedUpdateWithoutCareerInput>
    create: XOR<StudentCreateWithoutCareerInput, StudentUncheckedCreateWithoutCareerInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutCareerInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutCareerInput, StudentUncheckedUpdateWithoutCareerInput>
  }

  export type StudentUpdateManyWithWhereWithoutCareerInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutCareerInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    userId?: IntFilter<"Student"> | number
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    careerId?: IntFilter<"Student"> | number
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type SubjectUpsertWithWhereUniqueWithoutCareerInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutCareerInput, SubjectUncheckedUpdateWithoutCareerInput>
    create: XOR<SubjectCreateWithoutCareerInput, SubjectUncheckedCreateWithoutCareerInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutCareerInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutCareerInput, SubjectUncheckedUpdateWithoutCareerInput>
  }

  export type SubjectUpdateManyWithWhereWithoutCareerInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutCareerInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    credits?: IntFilter<"Subject"> | number
    maxQuota?: IntFilter<"Subject"> | number
    availableQuota?: IntFilter<"Subject"> | number
    careerId?: IntFilter<"Subject"> | number
    cycleId?: IntFilter<"Subject"> | number
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
  }

  export type SubjectCreateWithoutCycleInput = {
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    career: CareerCreateNestedOneWithoutSubjectsInput
    students?: StudentSubjectCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutCycleInput = {
    id?: number
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutCycleInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutCycleInput, SubjectUncheckedCreateWithoutCycleInput>
  }

  export type SubjectCreateManyCycleInputEnvelope = {
    data: SubjectCreateManyCycleInput | SubjectCreateManyCycleInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithWhereUniqueWithoutCycleInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutCycleInput, SubjectUncheckedUpdateWithoutCycleInput>
    create: XOR<SubjectCreateWithoutCycleInput, SubjectUncheckedCreateWithoutCycleInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutCycleInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutCycleInput, SubjectUncheckedUpdateWithoutCycleInput>
  }

  export type SubjectUpdateManyWithWhereWithoutCycleInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutCycleInput>
  }

  export type CareerCreateWithoutSubjectsInput = {
    name: string
    totalCycles: number
    durationYears: number
    createdAt?: Date | string
    updatedAt?: Date | string
    specialty: SpecialtyCreateNestedOneWithoutCareersInput
    students?: StudentCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    totalCycles: number
    durationYears: number
    specialtyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutSubjectsInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutSubjectsInput, CareerUncheckedCreateWithoutSubjectsInput>
  }

  export type CycleCreateWithoutSubjectsInput = {
    name: string
    number: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CycleUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    number: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CycleCreateOrConnectWithoutSubjectsInput = {
    where: CycleWhereUniqueInput
    create: XOR<CycleCreateWithoutSubjectsInput, CycleUncheckedCreateWithoutSubjectsInput>
  }

  export type StudentSubjectCreateWithoutSubjectInput = {
    grade?: number | null
    passed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutSubjectsInput
  }

  export type StudentSubjectUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentId: number
    grade?: number | null
    passed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectCreateOrConnectWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type StudentSubjectCreateManySubjectInputEnvelope = {
    data: StudentSubjectCreateManySubjectInput | StudentSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectCreateWithoutSubjectInput = {
    createdAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateWithoutSubjectInput = {
    id?: number
    teacherId: number
    createdAt?: Date | string
  }

  export type TeacherSubjectCreateOrConnectWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherSubjectCreateManySubjectInputEnvelope = {
    data: TeacherSubjectCreateManySubjectInput | TeacherSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutSubjectInput = {
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    academicPeriod: AcademicPeriodCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentId: number
    academicPeriodId: number
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutSubjectInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput>
  }

  export type EnrollmentCreateManySubjectInputEnvelope = {
    data: EnrollmentCreateManySubjectInput | EnrollmentCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type CareerUpsertWithoutSubjectsInput = {
    update: XOR<CareerUpdateWithoutSubjectsInput, CareerUncheckedUpdateWithoutSubjectsInput>
    create: XOR<CareerCreateWithoutSubjectsInput, CareerUncheckedCreateWithoutSubjectsInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutSubjectsInput, CareerUncheckedUpdateWithoutSubjectsInput>
  }

  export type CareerUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialty?: SpecialtyUpdateOneRequiredWithoutCareersNestedInput
    students?: StudentUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    specialtyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CycleUpsertWithoutSubjectsInput = {
    update: XOR<CycleUpdateWithoutSubjectsInput, CycleUncheckedUpdateWithoutSubjectsInput>
    create: XOR<CycleCreateWithoutSubjectsInput, CycleUncheckedCreateWithoutSubjectsInput>
    where?: CycleWhereInput
  }

  export type CycleUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: CycleWhereInput
    data: XOR<CycleUpdateWithoutSubjectsInput, CycleUncheckedUpdateWithoutSubjectsInput>
  }

  export type CycleUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    update: XOR<StudentSubjectUpdateWithoutSubjectInput, StudentSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    data: XOR<StudentSubjectUpdateWithoutSubjectInput, StudentSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type StudentSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: StudentSubjectScalarWhereInput
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type StudentSubjectScalarWhereInput = {
    AND?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
    OR?: StudentSubjectScalarWhereInput[]
    NOT?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
    id?: IntFilter<"StudentSubject"> | number
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    grade?: FloatNullableFilter<"StudentSubject"> | number | null
    passed?: BoolFilter<"StudentSubject"> | boolean
    createdAt?: DateTimeFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSubject"> | Date | string
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutSubjectInput, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutSubjectInput, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TeacherSubjectScalarWhereInput = {
    AND?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
    OR?: TeacherSubjectScalarWhereInput[]
    NOT?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
    id?: IntFilter<"TeacherSubject"> | number
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
    createdAt?: DateTimeFilter<"TeacherSubject"> | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutSubjectInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutSubjectInput, EnrollmentUncheckedUpdateWithoutSubjectInput>
    create: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutSubjectInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutSubjectInput, EnrollmentUncheckedUpdateWithoutSubjectInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutSubjectInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutSubjectInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    studentId?: IntFilter<"Enrollment"> | number
    subjectId?: IntFilter<"Enrollment"> | number
    academicPeriodId?: IntFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
  }

  export type TeacherSubjectCreateWithoutTeacherInput = {
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutTeachersInput
  }

  export type TeacherSubjectUncheckedCreateWithoutTeacherInput = {
    id?: number
    subjectId: number
    createdAt?: Date | string
  }

  export type TeacherSubjectCreateOrConnectWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSubjectCreateManyTeacherInputEnvelope = {
    data: TeacherSubjectCreateManyTeacherInput | TeacherSubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutTeacherInput, TeacherSubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutTeacherInput, TeacherSubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type SubjectCreateWithoutTeachersInput = {
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    career: CareerCreateNestedOneWithoutSubjectsInput
    cycle: CycleCreateNestedOneWithoutSubjectsInput
    students?: StudentSubjectCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeachersInput = {
    id?: number
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    careerId: number
    cycleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeachersInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
  }

  export type TeacherCreateWithoutSubjectsInput = {
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    employmentType?: $Enums.EmploymentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherUncheckedCreateWithoutSubjectsInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    employmentType?: $Enums.EmploymentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherCreateOrConnectWithoutSubjectsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectUpsertWithoutTeachersInput = {
    update: XOR<SubjectUpdateWithoutTeachersInput, SubjectUncheckedUpdateWithoutTeachersInput>
    create: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTeachersInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTeachersInput, SubjectUncheckedUpdateWithoutTeachersInput>
  }

  export type SubjectUpdateWithoutTeachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneRequiredWithoutSubjectsNestedInput
    cycle?: CycleUpdateOneRequiredWithoutSubjectsNestedInput
    students?: StudentSubjectUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    cycleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type TeacherUpsertWithoutSubjectsInput = {
    update: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type TeacherUpdateWithoutSubjectsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerCreateWithoutStudentsInput = {
    name: string
    totalCycles: number
    durationYears: number
    createdAt?: Date | string
    updatedAt?: Date | string
    specialty: SpecialtyCreateNestedOneWithoutCareersInput
    subjects?: SubjectCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    totalCycles: number
    durationYears: number
    specialtyId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: SubjectUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutStudentsInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutStudentsInput, CareerUncheckedCreateWithoutStudentsInput>
  }

  export type StudentSubjectCreateWithoutStudentInput = {
    grade?: number | null
    passed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutStudentsInput
  }

  export type StudentSubjectUncheckedCreateWithoutStudentInput = {
    id?: number
    subjectId: number
    grade?: number | null
    passed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectCreateOrConnectWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput>
  }

  export type StudentSubjectCreateManyStudentInputEnvelope = {
    data: StudentSubjectCreateManyStudentInput | StudentSubjectCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutStudentInput = {
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutEnrollmentsInput
    academicPeriod: AcademicPeriodCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutStudentInput = {
    id?: number
    subjectId: number
    academicPeriodId: number
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentCreateManyStudentInputEnvelope = {
    data: EnrollmentCreateManyStudentInput | EnrollmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CareerUpsertWithoutStudentsInput = {
    update: XOR<CareerUpdateWithoutStudentsInput, CareerUncheckedUpdateWithoutStudentsInput>
    create: XOR<CareerCreateWithoutStudentsInput, CareerUncheckedCreateWithoutStudentsInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutStudentsInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutStudentsInput, CareerUncheckedUpdateWithoutStudentsInput>
  }

  export type CareerUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialty?: SpecialtyUpdateOneRequiredWithoutCareersNestedInput
    subjects?: SubjectUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    specialtyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type StudentSubjectUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    update: XOR<StudentSubjectUpdateWithoutStudentInput, StudentSubjectUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput>
  }

  export type StudentSubjectUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    data: XOR<StudentSubjectUpdateWithoutStudentInput, StudentSubjectUncheckedUpdateWithoutStudentInput>
  }

  export type StudentSubjectUpdateManyWithWhereWithoutStudentInput = {
    where: StudentSubjectScalarWhereInput
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyWithoutStudentInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentCreateWithoutSubjectsInput = {
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    career: CareerCreateNestedOneWithoutStudentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSubjectsInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSubjectsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectCreateWithoutStudentsInput = {
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    career: CareerCreateNestedOneWithoutSubjectsInput
    cycle: CycleCreateNestedOneWithoutSubjectsInput
    teachers?: TeacherSubjectCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    careerId: number
    cycleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutStudentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
  }

  export type StudentUpsertWithoutSubjectsInput = {
    update: XOR<StudentUpdateWithoutSubjectsInput, StudentUncheckedUpdateWithoutSubjectsInput>
    create: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSubjectsInput, StudentUncheckedUpdateWithoutSubjectsInput>
  }

  export type StudentUpdateWithoutSubjectsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneRequiredWithoutStudentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectUpsertWithoutStudentsInput = {
    update: XOR<SubjectUpdateWithoutStudentsInput, SubjectUncheckedUpdateWithoutStudentsInput>
    create: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutStudentsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutStudentsInput, SubjectUncheckedUpdateWithoutStudentsInput>
  }

  export type SubjectUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneRequiredWithoutSubjectsNestedInput
    cycle?: CycleUpdateOneRequiredWithoutSubjectsNestedInput
    teachers?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    cycleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type EnrollmentCreateWithoutAcademicPeriodInput = {
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    subject: SubjectCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutAcademicPeriodInput = {
    id?: number
    studentId: number
    subjectId: number
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutAcademicPeriodInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutAcademicPeriodInput, EnrollmentUncheckedCreateWithoutAcademicPeriodInput>
  }

  export type EnrollmentCreateManyAcademicPeriodInputEnvelope = {
    data: EnrollmentCreateManyAcademicPeriodInput | EnrollmentCreateManyAcademicPeriodInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutAcademicPeriodInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutAcademicPeriodInput, EnrollmentUncheckedUpdateWithoutAcademicPeriodInput>
    create: XOR<EnrollmentCreateWithoutAcademicPeriodInput, EnrollmentUncheckedCreateWithoutAcademicPeriodInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutAcademicPeriodInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutAcademicPeriodInput, EnrollmentUncheckedUpdateWithoutAcademicPeriodInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutAcademicPeriodInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutAcademicPeriodInput>
  }

  export type StudentCreateWithoutEnrollmentsInput = {
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    career: CareerCreateNestedOneWithoutStudentsInput
    subjects?: StudentSubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutEnrollmentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
  }

  export type SubjectCreateWithoutEnrollmentsInput = {
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    career: CareerCreateNestedOneWithoutSubjectsInput
    cycle: CycleCreateNestedOneWithoutSubjectsInput
    students?: StudentSubjectCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    careerId: number
    cycleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutEnrollmentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutEnrollmentsInput, SubjectUncheckedCreateWithoutEnrollmentsInput>
  }

  export type AcademicPeriodCreateWithoutEnrollmentsInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicPeriodUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicPeriodCreateOrConnectWithoutEnrollmentsInput = {
    where: AcademicPeriodWhereUniqueInput
    create: XOR<AcademicPeriodCreateWithoutEnrollmentsInput, AcademicPeriodUncheckedCreateWithoutEnrollmentsInput>
  }

  export type StudentUpsertWithoutEnrollmentsInput = {
    update: XOR<StudentUpdateWithoutEnrollmentsInput, StudentUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutEnrollmentsInput, StudentUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type StudentUpdateWithoutEnrollmentsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneRequiredWithoutStudentsNestedInput
    subjects?: StudentSubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectUpsertWithoutEnrollmentsInput = {
    update: XOR<SubjectUpdateWithoutEnrollmentsInput, SubjectUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<SubjectCreateWithoutEnrollmentsInput, SubjectUncheckedCreateWithoutEnrollmentsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutEnrollmentsInput, SubjectUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type SubjectUpdateWithoutEnrollmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneRequiredWithoutSubjectsNestedInput
    cycle?: CycleUpdateOneRequiredWithoutSubjectsNestedInput
    students?: StudentSubjectUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    cycleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type AcademicPeriodUpsertWithoutEnrollmentsInput = {
    update: XOR<AcademicPeriodUpdateWithoutEnrollmentsInput, AcademicPeriodUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<AcademicPeriodCreateWithoutEnrollmentsInput, AcademicPeriodUncheckedCreateWithoutEnrollmentsInput>
    where?: AcademicPeriodWhereInput
  }

  export type AcademicPeriodUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: AcademicPeriodWhereInput
    data: XOR<AcademicPeriodUpdateWithoutEnrollmentsInput, AcademicPeriodUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type AcademicPeriodUpdateWithoutEnrollmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicPeriodUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerCreateManySpecialtyInput = {
    id?: number
    name: string
    totalCycles: number
    durationYears: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerUpdateWithoutSpecialtyInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutCareerNestedInput
    subjects?: SubjectUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutSpecialtyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutCareerNestedInput
    subjects?: SubjectUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateManyWithoutSpecialtyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalCycles?: IntFieldUpdateOperationsInput | number
    durationYears?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyCareerInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectCreateManyCareerInput = {
    id?: number
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    cycleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateWithoutCareerInput = {
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: StudentSubjectUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUpdateWithoutCareerInput = {
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: CycleUpdateOneRequiredWithoutSubjectsNestedInput
    students?: StudentSubjectUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    cycleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    cycleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateManyCycleInput = {
    id?: number
    name: string
    credits: number
    maxQuota?: number
    availableQuota?: number
    careerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateWithoutCycleInput = {
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneRequiredWithoutSubjectsNestedInput
    students?: StudentSubjectUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutCycleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutCycleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    maxQuota?: IntFieldUpdateOperationsInput | number
    availableQuota?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateManySubjectInput = {
    id?: number
    studentId: number
    grade?: number | null
    passed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherSubjectCreateManySubjectInput = {
    id?: number
    teacherId: number
    createdAt?: Date | string
  }

  export type EnrollmentCreateManySubjectInput = {
    id?: number
    studentId: number
    academicPeriodId: number
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectUpdateWithoutSubjectInput = {
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectUpdateWithoutSubjectInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutSubjectInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    academicPeriod?: AcademicPeriodUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    academicPeriodId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    academicPeriodId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectCreateManyTeacherInput = {
    id?: number
    subjectId: number
    createdAt?: Date | string
  }

  export type TeacherSubjectUpdateWithoutTeacherInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateManyStudentInput = {
    id?: number
    subjectId: number
    grade?: number | null
    passed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateManyStudentInput = {
    id?: number
    subjectId: number
    academicPeriodId: number
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectUpdateWithoutStudentInput = {
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    passed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutStudentInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutEnrollmentsNestedInput
    academicPeriod?: AcademicPeriodUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicPeriodId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicPeriodId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyAcademicPeriodInput = {
    id?: number
    studentId: number
    subjectId: number
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateWithoutAcademicPeriodInput = {
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutAcademicPeriodInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutAcademicPeriodInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}