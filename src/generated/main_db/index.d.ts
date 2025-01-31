
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model mst_todo_category
 * 
 */
export type mst_todo_category = $Result.DefaultSelection<Prisma.$mst_todo_categoryPayload>
/**
 * Model tr_todo
 * 
 */
export type tr_todo = $Result.DefaultSelection<Prisma.$tr_todoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mst_todo_categories
 * const mst_todo_categories = await prisma.mst_todo_category.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Mst_todo_categories
   * const mst_todo_categories = await prisma.mst_todo_category.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.mst_todo_category`: Exposes CRUD operations for the **mst_todo_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_todo_categories
    * const mst_todo_categories = await prisma.mst_todo_category.findMany()
    * ```
    */
  get mst_todo_category(): Prisma.mst_todo_categoryDelegate<ExtArgs>;

  /**
   * `prisma.tr_todo`: Exposes CRUD operations for the **tr_todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_todos
    * const tr_todos = await prisma.tr_todo.findMany()
    * ```
    */
  get tr_todo(): Prisma.tr_todoDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    mst_todo_category: 'mst_todo_category',
    tr_todo: 'tr_todo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "mst_todo_category" | "tr_todo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      mst_todo_category: {
        payload: Prisma.$mst_todo_categoryPayload<ExtArgs>
        fields: Prisma.mst_todo_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_todo_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_todo_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_todo_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_todo_categoryPayload>
          }
          findFirst: {
            args: Prisma.mst_todo_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_todo_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_todo_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_todo_categoryPayload>
          }
          findMany: {
            args: Prisma.mst_todo_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_todo_categoryPayload>[]
          }
          create: {
            args: Prisma.mst_todo_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_todo_categoryPayload>
          }
          createMany: {
            args: Prisma.mst_todo_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_todo_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_todo_categoryPayload>
          }
          update: {
            args: Prisma.mst_todo_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_todo_categoryPayload>
          }
          deleteMany: {
            args: Prisma.mst_todo_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_todo_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_todo_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_todo_categoryPayload>
          }
          aggregate: {
            args: Prisma.Mst_todo_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_todo_category>
          }
          groupBy: {
            args: Prisma.mst_todo_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_todo_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_todo_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_todo_categoryCountAggregateOutputType> | number
          }
        }
      }
      tr_todo: {
        payload: Prisma.$tr_todoPayload<ExtArgs>
        fields: Prisma.tr_todoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_todoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_todoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_todoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_todoPayload>
          }
          findFirst: {
            args: Prisma.tr_todoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_todoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_todoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_todoPayload>
          }
          findMany: {
            args: Prisma.tr_todoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_todoPayload>[]
          }
          create: {
            args: Prisma.tr_todoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_todoPayload>
          }
          createMany: {
            args: Prisma.tr_todoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_todoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_todoPayload>
          }
          update: {
            args: Prisma.tr_todoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_todoPayload>
          }
          deleteMany: {
            args: Prisma.tr_todoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_todoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_todoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_todoPayload>
          }
          aggregate: {
            args: Prisma.Tr_todoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_todo>
          }
          groupBy: {
            args: Prisma.tr_todoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_todoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_todoCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_todoCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Mst_todo_categoryCountOutputType
   */

  export type Mst_todo_categoryCountOutputType = {
    todos: number
  }

  export type Mst_todo_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | Mst_todo_categoryCountOutputTypeCountTodosArgs
  }

  // Custom InputTypes
  /**
   * Mst_todo_categoryCountOutputType without action
   */
  export type Mst_todo_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mst_todo_categoryCountOutputType
     */
    select?: Mst_todo_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Mst_todo_categoryCountOutputType without action
   */
  export type Mst_todo_categoryCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_todoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model mst_todo_category
   */

  export type AggregateMst_todo_category = {
    _count: Mst_todo_categoryCountAggregateOutputType | null
    _avg: Mst_todo_categoryAvgAggregateOutputType | null
    _sum: Mst_todo_categorySumAggregateOutputType | null
    _min: Mst_todo_categoryMinAggregateOutputType | null
    _max: Mst_todo_categoryMaxAggregateOutputType | null
  }

  export type Mst_todo_categoryAvgAggregateOutputType = {
    id: number | null
  }

  export type Mst_todo_categorySumAggregateOutputType = {
    id: number | null
  }

  export type Mst_todo_categoryMinAggregateOutputType = {
    id: number | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Mst_todo_categoryMaxAggregateOutputType = {
    id: number | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Mst_todo_categoryCountAggregateOutputType = {
    id: number
    category: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Mst_todo_categoryAvgAggregateInputType = {
    id?: true
  }

  export type Mst_todo_categorySumAggregateInputType = {
    id?: true
  }

  export type Mst_todo_categoryMinAggregateInputType = {
    id?: true
    category?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Mst_todo_categoryMaxAggregateInputType = {
    id?: true
    category?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Mst_todo_categoryCountAggregateInputType = {
    id?: true
    category?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Mst_todo_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_todo_category to aggregate.
     */
    where?: mst_todo_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_todo_categories to fetch.
     */
    orderBy?: mst_todo_categoryOrderByWithRelationInput | mst_todo_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_todo_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_todo_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_todo_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_todo_categories
    **/
    _count?: true | Mst_todo_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_todo_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_todo_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_todo_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_todo_categoryMaxAggregateInputType
  }

  export type GetMst_todo_categoryAggregateType<T extends Mst_todo_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_todo_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_todo_category[P]>
      : GetScalarType<T[P], AggregateMst_todo_category[P]>
  }




  export type mst_todo_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_todo_categoryWhereInput
    orderBy?: mst_todo_categoryOrderByWithAggregationInput | mst_todo_categoryOrderByWithAggregationInput[]
    by: Mst_todo_categoryScalarFieldEnum[] | Mst_todo_categoryScalarFieldEnum
    having?: mst_todo_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_todo_categoryCountAggregateInputType | true
    _avg?: Mst_todo_categoryAvgAggregateInputType
    _sum?: Mst_todo_categorySumAggregateInputType
    _min?: Mst_todo_categoryMinAggregateInputType
    _max?: Mst_todo_categoryMaxAggregateInputType
  }

  export type Mst_todo_categoryGroupByOutputType = {
    id: number
    category: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: Mst_todo_categoryCountAggregateOutputType | null
    _avg: Mst_todo_categoryAvgAggregateOutputType | null
    _sum: Mst_todo_categorySumAggregateOutputType | null
    _min: Mst_todo_categoryMinAggregateOutputType | null
    _max: Mst_todo_categoryMaxAggregateOutputType | null
  }

  type GetMst_todo_categoryGroupByPayload<T extends mst_todo_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_todo_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_todo_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_todo_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_todo_categoryGroupByOutputType[P]>
        }
      >
    >


  export type mst_todo_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    todos?: boolean | mst_todo_category$todosArgs<ExtArgs>
    _count?: boolean | Mst_todo_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mst_todo_category"]>


  export type mst_todo_categorySelectScalar = {
    id?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type mst_todo_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | mst_todo_category$todosArgs<ExtArgs>
    _count?: boolean | Mst_todo_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $mst_todo_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_todo_category"
    objects: {
      todos: Prisma.$tr_todoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["mst_todo_category"]>
    composites: {}
  }

  type mst_todo_categoryGetPayload<S extends boolean | null | undefined | mst_todo_categoryDefaultArgs> = $Result.GetResult<Prisma.$mst_todo_categoryPayload, S>

  type mst_todo_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_todo_categoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_todo_categoryCountAggregateInputType | true
    }

  export interface mst_todo_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_todo_category'], meta: { name: 'mst_todo_category' } }
    /**
     * Find zero or one Mst_todo_category that matches the filter.
     * @param {mst_todo_categoryFindUniqueArgs} args - Arguments to find a Mst_todo_category
     * @example
     * // Get one Mst_todo_category
     * const mst_todo_category = await prisma.mst_todo_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_todo_categoryFindUniqueArgs>(args: SelectSubset<T, mst_todo_categoryFindUniqueArgs<ExtArgs>>): Prisma__mst_todo_categoryClient<$Result.GetResult<Prisma.$mst_todo_categoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_todo_category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_todo_categoryFindUniqueOrThrowArgs} args - Arguments to find a Mst_todo_category
     * @example
     * // Get one Mst_todo_category
     * const mst_todo_category = await prisma.mst_todo_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_todo_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_todo_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_todo_categoryClient<$Result.GetResult<Prisma.$mst_todo_categoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_todo_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_todo_categoryFindFirstArgs} args - Arguments to find a Mst_todo_category
     * @example
     * // Get one Mst_todo_category
     * const mst_todo_category = await prisma.mst_todo_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_todo_categoryFindFirstArgs>(args?: SelectSubset<T, mst_todo_categoryFindFirstArgs<ExtArgs>>): Prisma__mst_todo_categoryClient<$Result.GetResult<Prisma.$mst_todo_categoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_todo_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_todo_categoryFindFirstOrThrowArgs} args - Arguments to find a Mst_todo_category
     * @example
     * // Get one Mst_todo_category
     * const mst_todo_category = await prisma.mst_todo_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_todo_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_todo_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_todo_categoryClient<$Result.GetResult<Prisma.$mst_todo_categoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_todo_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_todo_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_todo_categories
     * const mst_todo_categories = await prisma.mst_todo_category.findMany()
     * 
     * // Get first 10 Mst_todo_categories
     * const mst_todo_categories = await prisma.mst_todo_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_todo_categoryWithIdOnly = await prisma.mst_todo_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_todo_categoryFindManyArgs>(args?: SelectSubset<T, mst_todo_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_todo_categoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_todo_category.
     * @param {mst_todo_categoryCreateArgs} args - Arguments to create a Mst_todo_category.
     * @example
     * // Create one Mst_todo_category
     * const Mst_todo_category = await prisma.mst_todo_category.create({
     *   data: {
     *     // ... data to create a Mst_todo_category
     *   }
     * })
     * 
     */
    create<T extends mst_todo_categoryCreateArgs>(args: SelectSubset<T, mst_todo_categoryCreateArgs<ExtArgs>>): Prisma__mst_todo_categoryClient<$Result.GetResult<Prisma.$mst_todo_categoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_todo_categories.
     * @param {mst_todo_categoryCreateManyArgs} args - Arguments to create many Mst_todo_categories.
     * @example
     * // Create many Mst_todo_categories
     * const mst_todo_category = await prisma.mst_todo_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_todo_categoryCreateManyArgs>(args?: SelectSubset<T, mst_todo_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_todo_category.
     * @param {mst_todo_categoryDeleteArgs} args - Arguments to delete one Mst_todo_category.
     * @example
     * // Delete one Mst_todo_category
     * const Mst_todo_category = await prisma.mst_todo_category.delete({
     *   where: {
     *     // ... filter to delete one Mst_todo_category
     *   }
     * })
     * 
     */
    delete<T extends mst_todo_categoryDeleteArgs>(args: SelectSubset<T, mst_todo_categoryDeleteArgs<ExtArgs>>): Prisma__mst_todo_categoryClient<$Result.GetResult<Prisma.$mst_todo_categoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_todo_category.
     * @param {mst_todo_categoryUpdateArgs} args - Arguments to update one Mst_todo_category.
     * @example
     * // Update one Mst_todo_category
     * const mst_todo_category = await prisma.mst_todo_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_todo_categoryUpdateArgs>(args: SelectSubset<T, mst_todo_categoryUpdateArgs<ExtArgs>>): Prisma__mst_todo_categoryClient<$Result.GetResult<Prisma.$mst_todo_categoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_todo_categories.
     * @param {mst_todo_categoryDeleteManyArgs} args - Arguments to filter Mst_todo_categories to delete.
     * @example
     * // Delete a few Mst_todo_categories
     * const { count } = await prisma.mst_todo_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_todo_categoryDeleteManyArgs>(args?: SelectSubset<T, mst_todo_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_todo_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_todo_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_todo_categories
     * const mst_todo_category = await prisma.mst_todo_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_todo_categoryUpdateManyArgs>(args: SelectSubset<T, mst_todo_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_todo_category.
     * @param {mst_todo_categoryUpsertArgs} args - Arguments to update or create a Mst_todo_category.
     * @example
     * // Update or create a Mst_todo_category
     * const mst_todo_category = await prisma.mst_todo_category.upsert({
     *   create: {
     *     // ... data to create a Mst_todo_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_todo_category we want to update
     *   }
     * })
     */
    upsert<T extends mst_todo_categoryUpsertArgs>(args: SelectSubset<T, mst_todo_categoryUpsertArgs<ExtArgs>>): Prisma__mst_todo_categoryClient<$Result.GetResult<Prisma.$mst_todo_categoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_todo_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_todo_categoryCountArgs} args - Arguments to filter Mst_todo_categories to count.
     * @example
     * // Count the number of Mst_todo_categories
     * const count = await prisma.mst_todo_category.count({
     *   where: {
     *     // ... the filter for the Mst_todo_categories we want to count
     *   }
     * })
    **/
    count<T extends mst_todo_categoryCountArgs>(
      args?: Subset<T, mst_todo_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_todo_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_todo_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_todo_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_todo_categoryAggregateArgs>(args: Subset<T, Mst_todo_categoryAggregateArgs>): Prisma.PrismaPromise<GetMst_todo_categoryAggregateType<T>>

    /**
     * Group by Mst_todo_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_todo_categoryGroupByArgs} args - Group by arguments.
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
      T extends mst_todo_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_todo_categoryGroupByArgs['orderBy'] }
        : { orderBy?: mst_todo_categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_todo_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_todo_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_todo_category model
   */
  readonly fields: mst_todo_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_todo_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_todo_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    todos<T extends mst_todo_category$todosArgs<ExtArgs> = {}>(args?: Subset<T, mst_todo_category$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_todoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the mst_todo_category model
   */ 
  interface mst_todo_categoryFieldRefs {
    readonly id: FieldRef<"mst_todo_category", 'Int'>
    readonly category: FieldRef<"mst_todo_category", 'String'>
    readonly created_at: FieldRef<"mst_todo_category", 'DateTime'>
    readonly updated_at: FieldRef<"mst_todo_category", 'DateTime'>
    readonly deleted_at: FieldRef<"mst_todo_category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mst_todo_category findUnique
   */
  export type mst_todo_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_todo_category
     */
    select?: mst_todo_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mst_todo_categoryInclude<ExtArgs> | null
    /**
     * Filter, which mst_todo_category to fetch.
     */
    where: mst_todo_categoryWhereUniqueInput
  }

  /**
   * mst_todo_category findUniqueOrThrow
   */
  export type mst_todo_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_todo_category
     */
    select?: mst_todo_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mst_todo_categoryInclude<ExtArgs> | null
    /**
     * Filter, which mst_todo_category to fetch.
     */
    where: mst_todo_categoryWhereUniqueInput
  }

  /**
   * mst_todo_category findFirst
   */
  export type mst_todo_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_todo_category
     */
    select?: mst_todo_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mst_todo_categoryInclude<ExtArgs> | null
    /**
     * Filter, which mst_todo_category to fetch.
     */
    where?: mst_todo_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_todo_categories to fetch.
     */
    orderBy?: mst_todo_categoryOrderByWithRelationInput | mst_todo_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_todo_categories.
     */
    cursor?: mst_todo_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_todo_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_todo_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_todo_categories.
     */
    distinct?: Mst_todo_categoryScalarFieldEnum | Mst_todo_categoryScalarFieldEnum[]
  }

  /**
   * mst_todo_category findFirstOrThrow
   */
  export type mst_todo_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_todo_category
     */
    select?: mst_todo_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mst_todo_categoryInclude<ExtArgs> | null
    /**
     * Filter, which mst_todo_category to fetch.
     */
    where?: mst_todo_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_todo_categories to fetch.
     */
    orderBy?: mst_todo_categoryOrderByWithRelationInput | mst_todo_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_todo_categories.
     */
    cursor?: mst_todo_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_todo_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_todo_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_todo_categories.
     */
    distinct?: Mst_todo_categoryScalarFieldEnum | Mst_todo_categoryScalarFieldEnum[]
  }

  /**
   * mst_todo_category findMany
   */
  export type mst_todo_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_todo_category
     */
    select?: mst_todo_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mst_todo_categoryInclude<ExtArgs> | null
    /**
     * Filter, which mst_todo_categories to fetch.
     */
    where?: mst_todo_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_todo_categories to fetch.
     */
    orderBy?: mst_todo_categoryOrderByWithRelationInput | mst_todo_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_todo_categories.
     */
    cursor?: mst_todo_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_todo_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_todo_categories.
     */
    skip?: number
    distinct?: Mst_todo_categoryScalarFieldEnum | Mst_todo_categoryScalarFieldEnum[]
  }

  /**
   * mst_todo_category create
   */
  export type mst_todo_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_todo_category
     */
    select?: mst_todo_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mst_todo_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a mst_todo_category.
     */
    data: XOR<mst_todo_categoryCreateInput, mst_todo_categoryUncheckedCreateInput>
  }

  /**
   * mst_todo_category createMany
   */
  export type mst_todo_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_todo_categories.
     */
    data: mst_todo_categoryCreateManyInput | mst_todo_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_todo_category update
   */
  export type mst_todo_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_todo_category
     */
    select?: mst_todo_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mst_todo_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a mst_todo_category.
     */
    data: XOR<mst_todo_categoryUpdateInput, mst_todo_categoryUncheckedUpdateInput>
    /**
     * Choose, which mst_todo_category to update.
     */
    where: mst_todo_categoryWhereUniqueInput
  }

  /**
   * mst_todo_category updateMany
   */
  export type mst_todo_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_todo_categories.
     */
    data: XOR<mst_todo_categoryUpdateManyMutationInput, mst_todo_categoryUncheckedUpdateManyInput>
    /**
     * Filter which mst_todo_categories to update
     */
    where?: mst_todo_categoryWhereInput
  }

  /**
   * mst_todo_category upsert
   */
  export type mst_todo_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_todo_category
     */
    select?: mst_todo_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mst_todo_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the mst_todo_category to update in case it exists.
     */
    where: mst_todo_categoryWhereUniqueInput
    /**
     * In case the mst_todo_category found by the `where` argument doesn't exist, create a new mst_todo_category with this data.
     */
    create: XOR<mst_todo_categoryCreateInput, mst_todo_categoryUncheckedCreateInput>
    /**
     * In case the mst_todo_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_todo_categoryUpdateInput, mst_todo_categoryUncheckedUpdateInput>
  }

  /**
   * mst_todo_category delete
   */
  export type mst_todo_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_todo_category
     */
    select?: mst_todo_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mst_todo_categoryInclude<ExtArgs> | null
    /**
     * Filter which mst_todo_category to delete.
     */
    where: mst_todo_categoryWhereUniqueInput
  }

  /**
   * mst_todo_category deleteMany
   */
  export type mst_todo_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_todo_categories to delete
     */
    where?: mst_todo_categoryWhereInput
  }

  /**
   * mst_todo_category.todos
   */
  export type mst_todo_category$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
    where?: tr_todoWhereInput
    orderBy?: tr_todoOrderByWithRelationInput | tr_todoOrderByWithRelationInput[]
    cursor?: tr_todoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tr_todoScalarFieldEnum | Tr_todoScalarFieldEnum[]
  }

  /**
   * mst_todo_category without action
   */
  export type mst_todo_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_todo_category
     */
    select?: mst_todo_categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mst_todo_categoryInclude<ExtArgs> | null
  }


  /**
   * Model tr_todo
   */

  export type AggregateTr_todo = {
    _count: Tr_todoCountAggregateOutputType | null
    _avg: Tr_todoAvgAggregateOutputType | null
    _sum: Tr_todoSumAggregateOutputType | null
    _min: Tr_todoMinAggregateOutputType | null
    _max: Tr_todoMaxAggregateOutputType | null
  }

  export type Tr_todoAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    progress: number | null
  }

  export type Tr_todoSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    progress: number | null
  }

  export type Tr_todoMinAggregateOutputType = {
    id: number | null
    title: string | null
    category_id: number | null
    description: string | null
    progress: number | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Tr_todoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    category_id: number | null
    description: string | null
    progress: number | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Tr_todoCountAggregateOutputType = {
    id: number
    title: number
    category_id: number
    description: number
    progress: number
    created_by: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Tr_todoAvgAggregateInputType = {
    id?: true
    category_id?: true
    progress?: true
  }

  export type Tr_todoSumAggregateInputType = {
    id?: true
    category_id?: true
    progress?: true
  }

  export type Tr_todoMinAggregateInputType = {
    id?: true
    title?: true
    category_id?: true
    description?: true
    progress?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Tr_todoMaxAggregateInputType = {
    id?: true
    title?: true
    category_id?: true
    description?: true
    progress?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Tr_todoCountAggregateInputType = {
    id?: true
    title?: true
    category_id?: true
    description?: true
    progress?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Tr_todoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_todo to aggregate.
     */
    where?: tr_todoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_todos to fetch.
     */
    orderBy?: tr_todoOrderByWithRelationInput | tr_todoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_todoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_todos
    **/
    _count?: true | Tr_todoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_todoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_todoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_todoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_todoMaxAggregateInputType
  }

  export type GetTr_todoAggregateType<T extends Tr_todoAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_todo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_todo[P]>
      : GetScalarType<T[P], AggregateTr_todo[P]>
  }




  export type tr_todoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_todoWhereInput
    orderBy?: tr_todoOrderByWithAggregationInput | tr_todoOrderByWithAggregationInput[]
    by: Tr_todoScalarFieldEnum[] | Tr_todoScalarFieldEnum
    having?: tr_todoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_todoCountAggregateInputType | true
    _avg?: Tr_todoAvgAggregateInputType
    _sum?: Tr_todoSumAggregateInputType
    _min?: Tr_todoMinAggregateInputType
    _max?: Tr_todoMaxAggregateInputType
  }

  export type Tr_todoGroupByOutputType = {
    id: number
    title: string
    category_id: number
    description: string | null
    progress: number
    created_by: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: Tr_todoCountAggregateOutputType | null
    _avg: Tr_todoAvgAggregateOutputType | null
    _sum: Tr_todoSumAggregateOutputType | null
    _min: Tr_todoMinAggregateOutputType | null
    _max: Tr_todoMaxAggregateOutputType | null
  }

  type GetTr_todoGroupByPayload<T extends tr_todoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_todoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_todoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_todoGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_todoGroupByOutputType[P]>
        }
      >
    >


  export type tr_todoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category_id?: boolean
    description?: boolean
    progress?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    category?: boolean | mst_todo_categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tr_todo"]>


  export type tr_todoSelectScalar = {
    id?: boolean
    title?: boolean
    category_id?: boolean
    description?: boolean
    progress?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type tr_todoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | mst_todo_categoryDefaultArgs<ExtArgs>
  }

  export type $tr_todoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_todo"
    objects: {
      category: Prisma.$mst_todo_categoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      category_id: number
      description: string | null
      progress: number
      created_by: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["tr_todo"]>
    composites: {}
  }

  type tr_todoGetPayload<S extends boolean | null | undefined | tr_todoDefaultArgs> = $Result.GetResult<Prisma.$tr_todoPayload, S>

  type tr_todoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tr_todoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_todoCountAggregateInputType | true
    }

  export interface tr_todoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_todo'], meta: { name: 'tr_todo' } }
    /**
     * Find zero or one Tr_todo that matches the filter.
     * @param {tr_todoFindUniqueArgs} args - Arguments to find a Tr_todo
     * @example
     * // Get one Tr_todo
     * const tr_todo = await prisma.tr_todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_todoFindUniqueArgs>(args: SelectSubset<T, tr_todoFindUniqueArgs<ExtArgs>>): Prisma__tr_todoClient<$Result.GetResult<Prisma.$tr_todoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_todo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tr_todoFindUniqueOrThrowArgs} args - Arguments to find a Tr_todo
     * @example
     * // Get one Tr_todo
     * const tr_todo = await prisma.tr_todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_todoFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_todoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_todoClient<$Result.GetResult<Prisma.$tr_todoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_todoFindFirstArgs} args - Arguments to find a Tr_todo
     * @example
     * // Get one Tr_todo
     * const tr_todo = await prisma.tr_todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_todoFindFirstArgs>(args?: SelectSubset<T, tr_todoFindFirstArgs<ExtArgs>>): Prisma__tr_todoClient<$Result.GetResult<Prisma.$tr_todoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_todo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_todoFindFirstOrThrowArgs} args - Arguments to find a Tr_todo
     * @example
     * // Get one Tr_todo
     * const tr_todo = await prisma.tr_todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_todoFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_todoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_todoClient<$Result.GetResult<Prisma.$tr_todoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_todoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_todos
     * const tr_todos = await prisma.tr_todo.findMany()
     * 
     * // Get first 10 Tr_todos
     * const tr_todos = await prisma.tr_todo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_todoWithIdOnly = await prisma.tr_todo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_todoFindManyArgs>(args?: SelectSubset<T, tr_todoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_todoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_todo.
     * @param {tr_todoCreateArgs} args - Arguments to create a Tr_todo.
     * @example
     * // Create one Tr_todo
     * const Tr_todo = await prisma.tr_todo.create({
     *   data: {
     *     // ... data to create a Tr_todo
     *   }
     * })
     * 
     */
    create<T extends tr_todoCreateArgs>(args: SelectSubset<T, tr_todoCreateArgs<ExtArgs>>): Prisma__tr_todoClient<$Result.GetResult<Prisma.$tr_todoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_todos.
     * @param {tr_todoCreateManyArgs} args - Arguments to create many Tr_todos.
     * @example
     * // Create many Tr_todos
     * const tr_todo = await prisma.tr_todo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_todoCreateManyArgs>(args?: SelectSubset<T, tr_todoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_todo.
     * @param {tr_todoDeleteArgs} args - Arguments to delete one Tr_todo.
     * @example
     * // Delete one Tr_todo
     * const Tr_todo = await prisma.tr_todo.delete({
     *   where: {
     *     // ... filter to delete one Tr_todo
     *   }
     * })
     * 
     */
    delete<T extends tr_todoDeleteArgs>(args: SelectSubset<T, tr_todoDeleteArgs<ExtArgs>>): Prisma__tr_todoClient<$Result.GetResult<Prisma.$tr_todoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_todo.
     * @param {tr_todoUpdateArgs} args - Arguments to update one Tr_todo.
     * @example
     * // Update one Tr_todo
     * const tr_todo = await prisma.tr_todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_todoUpdateArgs>(args: SelectSubset<T, tr_todoUpdateArgs<ExtArgs>>): Prisma__tr_todoClient<$Result.GetResult<Prisma.$tr_todoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_todos.
     * @param {tr_todoDeleteManyArgs} args - Arguments to filter Tr_todos to delete.
     * @example
     * // Delete a few Tr_todos
     * const { count } = await prisma.tr_todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_todoDeleteManyArgs>(args?: SelectSubset<T, tr_todoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_todoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_todos
     * const tr_todo = await prisma.tr_todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_todoUpdateManyArgs>(args: SelectSubset<T, tr_todoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_todo.
     * @param {tr_todoUpsertArgs} args - Arguments to update or create a Tr_todo.
     * @example
     * // Update or create a Tr_todo
     * const tr_todo = await prisma.tr_todo.upsert({
     *   create: {
     *     // ... data to create a Tr_todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_todo we want to update
     *   }
     * })
     */
    upsert<T extends tr_todoUpsertArgs>(args: SelectSubset<T, tr_todoUpsertArgs<ExtArgs>>): Prisma__tr_todoClient<$Result.GetResult<Prisma.$tr_todoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_todoCountArgs} args - Arguments to filter Tr_todos to count.
     * @example
     * // Count the number of Tr_todos
     * const count = await prisma.tr_todo.count({
     *   where: {
     *     // ... the filter for the Tr_todos we want to count
     *   }
     * })
    **/
    count<T extends tr_todoCountArgs>(
      args?: Subset<T, tr_todoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_todoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_todoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tr_todoAggregateArgs>(args: Subset<T, Tr_todoAggregateArgs>): Prisma.PrismaPromise<GetTr_todoAggregateType<T>>

    /**
     * Group by Tr_todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_todoGroupByArgs} args - Group by arguments.
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
      T extends tr_todoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_todoGroupByArgs['orderBy'] }
        : { orderBy?: tr_todoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tr_todoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_todoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_todo model
   */
  readonly fields: tr_todoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_todoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends mst_todo_categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mst_todo_categoryDefaultArgs<ExtArgs>>): Prisma__mst_todo_categoryClient<$Result.GetResult<Prisma.$mst_todo_categoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the tr_todo model
   */ 
  interface tr_todoFieldRefs {
    readonly id: FieldRef<"tr_todo", 'Int'>
    readonly title: FieldRef<"tr_todo", 'String'>
    readonly category_id: FieldRef<"tr_todo", 'Int'>
    readonly description: FieldRef<"tr_todo", 'String'>
    readonly progress: FieldRef<"tr_todo", 'Float'>
    readonly created_by: FieldRef<"tr_todo", 'String'>
    readonly created_at: FieldRef<"tr_todo", 'DateTime'>
    readonly updated_at: FieldRef<"tr_todo", 'DateTime'>
    readonly deleted_at: FieldRef<"tr_todo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tr_todo findUnique
   */
  export type tr_todoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
    /**
     * Filter, which tr_todo to fetch.
     */
    where: tr_todoWhereUniqueInput
  }

  /**
   * tr_todo findUniqueOrThrow
   */
  export type tr_todoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
    /**
     * Filter, which tr_todo to fetch.
     */
    where: tr_todoWhereUniqueInput
  }

  /**
   * tr_todo findFirst
   */
  export type tr_todoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
    /**
     * Filter, which tr_todo to fetch.
     */
    where?: tr_todoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_todos to fetch.
     */
    orderBy?: tr_todoOrderByWithRelationInput | tr_todoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_todos.
     */
    cursor?: tr_todoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_todos.
     */
    distinct?: Tr_todoScalarFieldEnum | Tr_todoScalarFieldEnum[]
  }

  /**
   * tr_todo findFirstOrThrow
   */
  export type tr_todoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
    /**
     * Filter, which tr_todo to fetch.
     */
    where?: tr_todoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_todos to fetch.
     */
    orderBy?: tr_todoOrderByWithRelationInput | tr_todoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_todos.
     */
    cursor?: tr_todoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_todos.
     */
    distinct?: Tr_todoScalarFieldEnum | Tr_todoScalarFieldEnum[]
  }

  /**
   * tr_todo findMany
   */
  export type tr_todoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
    /**
     * Filter, which tr_todos to fetch.
     */
    where?: tr_todoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_todos to fetch.
     */
    orderBy?: tr_todoOrderByWithRelationInput | tr_todoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_todos.
     */
    cursor?: tr_todoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_todos.
     */
    skip?: number
    distinct?: Tr_todoScalarFieldEnum | Tr_todoScalarFieldEnum[]
  }

  /**
   * tr_todo create
   */
  export type tr_todoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
    /**
     * The data needed to create a tr_todo.
     */
    data: XOR<tr_todoCreateInput, tr_todoUncheckedCreateInput>
  }

  /**
   * tr_todo createMany
   */
  export type tr_todoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_todos.
     */
    data: tr_todoCreateManyInput | tr_todoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_todo update
   */
  export type tr_todoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
    /**
     * The data needed to update a tr_todo.
     */
    data: XOR<tr_todoUpdateInput, tr_todoUncheckedUpdateInput>
    /**
     * Choose, which tr_todo to update.
     */
    where: tr_todoWhereUniqueInput
  }

  /**
   * tr_todo updateMany
   */
  export type tr_todoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_todos.
     */
    data: XOR<tr_todoUpdateManyMutationInput, tr_todoUncheckedUpdateManyInput>
    /**
     * Filter which tr_todos to update
     */
    where?: tr_todoWhereInput
  }

  /**
   * tr_todo upsert
   */
  export type tr_todoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
    /**
     * The filter to search for the tr_todo to update in case it exists.
     */
    where: tr_todoWhereUniqueInput
    /**
     * In case the tr_todo found by the `where` argument doesn't exist, create a new tr_todo with this data.
     */
    create: XOR<tr_todoCreateInput, tr_todoUncheckedCreateInput>
    /**
     * In case the tr_todo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_todoUpdateInput, tr_todoUncheckedUpdateInput>
  }

  /**
   * tr_todo delete
   */
  export type tr_todoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
    /**
     * Filter which tr_todo to delete.
     */
    where: tr_todoWhereUniqueInput
  }

  /**
   * tr_todo deleteMany
   */
  export type tr_todoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_todos to delete
     */
    where?: tr_todoWhereInput
  }

  /**
   * tr_todo without action
   */
  export type tr_todoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_todo
     */
    select?: tr_todoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tr_todoInclude<ExtArgs> | null
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


  export const Mst_todo_categoryScalarFieldEnum: {
    id: 'id',
    category: 'category',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Mst_todo_categoryScalarFieldEnum = (typeof Mst_todo_categoryScalarFieldEnum)[keyof typeof Mst_todo_categoryScalarFieldEnum]


  export const Tr_todoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category_id: 'category_id',
    description: 'description',
    progress: 'progress',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Tr_todoScalarFieldEnum = (typeof Tr_todoScalarFieldEnum)[keyof typeof Tr_todoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type mst_todo_categoryWhereInput = {
    AND?: mst_todo_categoryWhereInput | mst_todo_categoryWhereInput[]
    OR?: mst_todo_categoryWhereInput[]
    NOT?: mst_todo_categoryWhereInput | mst_todo_categoryWhereInput[]
    id?: IntFilter<"mst_todo_category"> | number
    category?: StringFilter<"mst_todo_category"> | string
    created_at?: DateTimeFilter<"mst_todo_category"> | Date | string
    updated_at?: DateTimeFilter<"mst_todo_category"> | Date | string
    deleted_at?: DateTimeNullableFilter<"mst_todo_category"> | Date | string | null
    todos?: Tr_todoListRelationFilter
  }

  export type mst_todo_categoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    todos?: tr_todoOrderByRelationAggregateInput
  }

  export type mst_todo_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_todo_categoryWhereInput | mst_todo_categoryWhereInput[]
    OR?: mst_todo_categoryWhereInput[]
    NOT?: mst_todo_categoryWhereInput | mst_todo_categoryWhereInput[]
    category?: StringFilter<"mst_todo_category"> | string
    created_at?: DateTimeFilter<"mst_todo_category"> | Date | string
    updated_at?: DateTimeFilter<"mst_todo_category"> | Date | string
    deleted_at?: DateTimeNullableFilter<"mst_todo_category"> | Date | string | null
    todos?: Tr_todoListRelationFilter
  }, "id">

  export type mst_todo_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: mst_todo_categoryCountOrderByAggregateInput
    _avg?: mst_todo_categoryAvgOrderByAggregateInput
    _max?: mst_todo_categoryMaxOrderByAggregateInput
    _min?: mst_todo_categoryMinOrderByAggregateInput
    _sum?: mst_todo_categorySumOrderByAggregateInput
  }

  export type mst_todo_categoryScalarWhereWithAggregatesInput = {
    AND?: mst_todo_categoryScalarWhereWithAggregatesInput | mst_todo_categoryScalarWhereWithAggregatesInput[]
    OR?: mst_todo_categoryScalarWhereWithAggregatesInput[]
    NOT?: mst_todo_categoryScalarWhereWithAggregatesInput | mst_todo_categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_todo_category"> | number
    category?: StringWithAggregatesFilter<"mst_todo_category"> | string
    created_at?: DateTimeWithAggregatesFilter<"mst_todo_category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"mst_todo_category"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"mst_todo_category"> | Date | string | null
  }

  export type tr_todoWhereInput = {
    AND?: tr_todoWhereInput | tr_todoWhereInput[]
    OR?: tr_todoWhereInput[]
    NOT?: tr_todoWhereInput | tr_todoWhereInput[]
    id?: IntFilter<"tr_todo"> | number
    title?: StringFilter<"tr_todo"> | string
    category_id?: IntFilter<"tr_todo"> | number
    description?: StringNullableFilter<"tr_todo"> | string | null
    progress?: FloatFilter<"tr_todo"> | number
    created_by?: StringFilter<"tr_todo"> | string
    created_at?: DateTimeFilter<"tr_todo"> | Date | string
    updated_at?: DateTimeFilter<"tr_todo"> | Date | string
    deleted_at?: DateTimeNullableFilter<"tr_todo"> | Date | string | null
    category?: XOR<Mst_todo_categoryRelationFilter, mst_todo_categoryWhereInput>
  }

  export type tr_todoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    description?: SortOrderInput | SortOrder
    progress?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    category?: mst_todo_categoryOrderByWithRelationInput
  }

  export type tr_todoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tr_todoWhereInput | tr_todoWhereInput[]
    OR?: tr_todoWhereInput[]
    NOT?: tr_todoWhereInput | tr_todoWhereInput[]
    title?: StringFilter<"tr_todo"> | string
    category_id?: IntFilter<"tr_todo"> | number
    description?: StringNullableFilter<"tr_todo"> | string | null
    progress?: FloatFilter<"tr_todo"> | number
    created_by?: StringFilter<"tr_todo"> | string
    created_at?: DateTimeFilter<"tr_todo"> | Date | string
    updated_at?: DateTimeFilter<"tr_todo"> | Date | string
    deleted_at?: DateTimeNullableFilter<"tr_todo"> | Date | string | null
    category?: XOR<Mst_todo_categoryRelationFilter, mst_todo_categoryWhereInput>
  }, "id">

  export type tr_todoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    description?: SortOrderInput | SortOrder
    progress?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: tr_todoCountOrderByAggregateInput
    _avg?: tr_todoAvgOrderByAggregateInput
    _max?: tr_todoMaxOrderByAggregateInput
    _min?: tr_todoMinOrderByAggregateInput
    _sum?: tr_todoSumOrderByAggregateInput
  }

  export type tr_todoScalarWhereWithAggregatesInput = {
    AND?: tr_todoScalarWhereWithAggregatesInput | tr_todoScalarWhereWithAggregatesInput[]
    OR?: tr_todoScalarWhereWithAggregatesInput[]
    NOT?: tr_todoScalarWhereWithAggregatesInput | tr_todoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_todo"> | number
    title?: StringWithAggregatesFilter<"tr_todo"> | string
    category_id?: IntWithAggregatesFilter<"tr_todo"> | number
    description?: StringNullableWithAggregatesFilter<"tr_todo"> | string | null
    progress?: FloatWithAggregatesFilter<"tr_todo"> | number
    created_by?: StringWithAggregatesFilter<"tr_todo"> | string
    created_at?: DateTimeWithAggregatesFilter<"tr_todo"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tr_todo"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"tr_todo"> | Date | string | null
  }

  export type mst_todo_categoryCreateInput = {
    category: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    todos?: tr_todoCreateNestedManyWithoutCategoryInput
  }

  export type mst_todo_categoryUncheckedCreateInput = {
    id?: number
    category: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    todos?: tr_todoUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type mst_todo_categoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todos?: tr_todoUpdateManyWithoutCategoryNestedInput
  }

  export type mst_todo_categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    todos?: tr_todoUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type mst_todo_categoryCreateManyInput = {
    id?: number
    category: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type mst_todo_categoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mst_todo_categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_todoCreateInput = {
    title: string
    description?: string | null
    progress?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    category: mst_todo_categoryCreateNestedOneWithoutTodosInput
  }

  export type tr_todoUncheckedCreateInput = {
    id?: number
    title: string
    category_id: number
    description?: string | null
    progress?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type tr_todoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: mst_todo_categoryUpdateOneRequiredWithoutTodosNestedInput
  }

  export type tr_todoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_todoCreateManyInput = {
    id?: number
    title: string
    category_id: number
    description?: string | null
    progress?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type tr_todoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_todoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Tr_todoListRelationFilter = {
    every?: tr_todoWhereInput
    some?: tr_todoWhereInput
    none?: tr_todoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tr_todoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mst_todo_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type mst_todo_categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mst_todo_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type mst_todo_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type mst_todo_categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Mst_todo_categoryRelationFilter = {
    is?: mst_todo_categoryWhereInput
    isNot?: mst_todo_categoryWhereInput
  }

  export type tr_todoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    description?: SortOrder
    progress?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type tr_todoAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    progress?: SortOrder
  }

  export type tr_todoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    description?: SortOrder
    progress?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type tr_todoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    description?: SortOrder
    progress?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type tr_todoSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    progress?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type tr_todoCreateNestedManyWithoutCategoryInput = {
    create?: XOR<tr_todoCreateWithoutCategoryInput, tr_todoUncheckedCreateWithoutCategoryInput> | tr_todoCreateWithoutCategoryInput[] | tr_todoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: tr_todoCreateOrConnectWithoutCategoryInput | tr_todoCreateOrConnectWithoutCategoryInput[]
    createMany?: tr_todoCreateManyCategoryInputEnvelope
    connect?: tr_todoWhereUniqueInput | tr_todoWhereUniqueInput[]
  }

  export type tr_todoUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<tr_todoCreateWithoutCategoryInput, tr_todoUncheckedCreateWithoutCategoryInput> | tr_todoCreateWithoutCategoryInput[] | tr_todoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: tr_todoCreateOrConnectWithoutCategoryInput | tr_todoCreateOrConnectWithoutCategoryInput[]
    createMany?: tr_todoCreateManyCategoryInputEnvelope
    connect?: tr_todoWhereUniqueInput | tr_todoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type tr_todoUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<tr_todoCreateWithoutCategoryInput, tr_todoUncheckedCreateWithoutCategoryInput> | tr_todoCreateWithoutCategoryInput[] | tr_todoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: tr_todoCreateOrConnectWithoutCategoryInput | tr_todoCreateOrConnectWithoutCategoryInput[]
    upsert?: tr_todoUpsertWithWhereUniqueWithoutCategoryInput | tr_todoUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: tr_todoCreateManyCategoryInputEnvelope
    set?: tr_todoWhereUniqueInput | tr_todoWhereUniqueInput[]
    disconnect?: tr_todoWhereUniqueInput | tr_todoWhereUniqueInput[]
    delete?: tr_todoWhereUniqueInput | tr_todoWhereUniqueInput[]
    connect?: tr_todoWhereUniqueInput | tr_todoWhereUniqueInput[]
    update?: tr_todoUpdateWithWhereUniqueWithoutCategoryInput | tr_todoUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: tr_todoUpdateManyWithWhereWithoutCategoryInput | tr_todoUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: tr_todoScalarWhereInput | tr_todoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tr_todoUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<tr_todoCreateWithoutCategoryInput, tr_todoUncheckedCreateWithoutCategoryInput> | tr_todoCreateWithoutCategoryInput[] | tr_todoUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: tr_todoCreateOrConnectWithoutCategoryInput | tr_todoCreateOrConnectWithoutCategoryInput[]
    upsert?: tr_todoUpsertWithWhereUniqueWithoutCategoryInput | tr_todoUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: tr_todoCreateManyCategoryInputEnvelope
    set?: tr_todoWhereUniqueInput | tr_todoWhereUniqueInput[]
    disconnect?: tr_todoWhereUniqueInput | tr_todoWhereUniqueInput[]
    delete?: tr_todoWhereUniqueInput | tr_todoWhereUniqueInput[]
    connect?: tr_todoWhereUniqueInput | tr_todoWhereUniqueInput[]
    update?: tr_todoUpdateWithWhereUniqueWithoutCategoryInput | tr_todoUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: tr_todoUpdateManyWithWhereWithoutCategoryInput | tr_todoUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: tr_todoScalarWhereInput | tr_todoScalarWhereInput[]
  }

  export type mst_todo_categoryCreateNestedOneWithoutTodosInput = {
    create?: XOR<mst_todo_categoryCreateWithoutTodosInput, mst_todo_categoryUncheckedCreateWithoutTodosInput>
    connectOrCreate?: mst_todo_categoryCreateOrConnectWithoutTodosInput
    connect?: mst_todo_categoryWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type mst_todo_categoryUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<mst_todo_categoryCreateWithoutTodosInput, mst_todo_categoryUncheckedCreateWithoutTodosInput>
    connectOrCreate?: mst_todo_categoryCreateOrConnectWithoutTodosInput
    upsert?: mst_todo_categoryUpsertWithoutTodosInput
    connect?: mst_todo_categoryWhereUniqueInput
    update?: XOR<XOR<mst_todo_categoryUpdateToOneWithWhereWithoutTodosInput, mst_todo_categoryUpdateWithoutTodosInput>, mst_todo_categoryUncheckedUpdateWithoutTodosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type tr_todoCreateWithoutCategoryInput = {
    title: string
    description?: string | null
    progress?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type tr_todoUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    description?: string | null
    progress?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type tr_todoCreateOrConnectWithoutCategoryInput = {
    where: tr_todoWhereUniqueInput
    create: XOR<tr_todoCreateWithoutCategoryInput, tr_todoUncheckedCreateWithoutCategoryInput>
  }

  export type tr_todoCreateManyCategoryInputEnvelope = {
    data: tr_todoCreateManyCategoryInput | tr_todoCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type tr_todoUpsertWithWhereUniqueWithoutCategoryInput = {
    where: tr_todoWhereUniqueInput
    update: XOR<tr_todoUpdateWithoutCategoryInput, tr_todoUncheckedUpdateWithoutCategoryInput>
    create: XOR<tr_todoCreateWithoutCategoryInput, tr_todoUncheckedCreateWithoutCategoryInput>
  }

  export type tr_todoUpdateWithWhereUniqueWithoutCategoryInput = {
    where: tr_todoWhereUniqueInput
    data: XOR<tr_todoUpdateWithoutCategoryInput, tr_todoUncheckedUpdateWithoutCategoryInput>
  }

  export type tr_todoUpdateManyWithWhereWithoutCategoryInput = {
    where: tr_todoScalarWhereInput
    data: XOR<tr_todoUpdateManyMutationInput, tr_todoUncheckedUpdateManyWithoutCategoryInput>
  }

  export type tr_todoScalarWhereInput = {
    AND?: tr_todoScalarWhereInput | tr_todoScalarWhereInput[]
    OR?: tr_todoScalarWhereInput[]
    NOT?: tr_todoScalarWhereInput | tr_todoScalarWhereInput[]
    id?: IntFilter<"tr_todo"> | number
    title?: StringFilter<"tr_todo"> | string
    category_id?: IntFilter<"tr_todo"> | number
    description?: StringNullableFilter<"tr_todo"> | string | null
    progress?: FloatFilter<"tr_todo"> | number
    created_by?: StringFilter<"tr_todo"> | string
    created_at?: DateTimeFilter<"tr_todo"> | Date | string
    updated_at?: DateTimeFilter<"tr_todo"> | Date | string
    deleted_at?: DateTimeNullableFilter<"tr_todo"> | Date | string | null
  }

  export type mst_todo_categoryCreateWithoutTodosInput = {
    category: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type mst_todo_categoryUncheckedCreateWithoutTodosInput = {
    id?: number
    category: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type mst_todo_categoryCreateOrConnectWithoutTodosInput = {
    where: mst_todo_categoryWhereUniqueInput
    create: XOR<mst_todo_categoryCreateWithoutTodosInput, mst_todo_categoryUncheckedCreateWithoutTodosInput>
  }

  export type mst_todo_categoryUpsertWithoutTodosInput = {
    update: XOR<mst_todo_categoryUpdateWithoutTodosInput, mst_todo_categoryUncheckedUpdateWithoutTodosInput>
    create: XOR<mst_todo_categoryCreateWithoutTodosInput, mst_todo_categoryUncheckedCreateWithoutTodosInput>
    where?: mst_todo_categoryWhereInput
  }

  export type mst_todo_categoryUpdateToOneWithWhereWithoutTodosInput = {
    where?: mst_todo_categoryWhereInput
    data: XOR<mst_todo_categoryUpdateWithoutTodosInput, mst_todo_categoryUncheckedUpdateWithoutTodosInput>
  }

  export type mst_todo_categoryUpdateWithoutTodosInput = {
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mst_todo_categoryUncheckedUpdateWithoutTodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_todoCreateManyCategoryInput = {
    id?: number
    title: string
    description?: string | null
    progress?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type tr_todoUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_todoUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tr_todoUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Mst_todo_categoryCountOutputTypeDefaultArgs instead
     */
    export type Mst_todo_categoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Mst_todo_categoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mst_todo_categoryDefaultArgs instead
     */
    export type mst_todo_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mst_todo_categoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tr_todoDefaultArgs instead
     */
    export type tr_todoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tr_todoDefaultArgs<ExtArgs>

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