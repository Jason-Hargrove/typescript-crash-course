import { AssertionError } from 'assert'

// Basic Types
let id: number = 5
let company: string = 'Jason Hargrove'
let isArtist: boolean = true
let x: any = 'Hello'
let age: number

x = true
age = 47

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tupel
let person: [number, string, boolean] = [2, 'Hello', true]
// Tupel Array
let employee: [number, string][]

employee = [
  [1, 'Richard'],
  [2, 'Jaosn'],
  [3, 'Hargrove'],
]

// Union
let pId: string | number

pId = 22
pId = 'Gouache'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// console.log(Direction2.Left)

// Objects

type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Function
const adNum = (x: number, y: number): number => {
  return x + y
}
// console.log(adNum(1, 2))

// Void
function log(message: string | number): void {
  console.log(message)
}
// console.log(log(true));

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'Jason',
}

// Since it's 'readonly' you'll get an error
// user1.id = 5

// When using type, you can use it with primatives and unions
type Point = number | string
const p1: Point = 1
// You can't use an interface in this way
// interface Point2 = number | string
// const p2: Point2 = 1

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y
