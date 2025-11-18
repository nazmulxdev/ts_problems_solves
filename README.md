# Blog Post:

---

### 1.What are some differences between interfaces and types in TypeScript?

**_Answer:_**
**Interface** (ইন্টারফেজ) এবং **types** (টাইপস) দুইটাই টাইপ ডিক্লার করার জন্য টাইপস্ক্রিপ্টে ইউজ করা হয়। কিন্তু এদের ইউজ করার প্রোসেস এবং ইউজ কেস আলাদা। নিচে interface এবং type এর মধ্যের ডিফারেন্স দেয়া হলোঃ

**১। Declaration :** interface এবং type দুইটা ডিক্ল্যার করার প্রোসেস আলাদা ।

interface ডিক্ল্যার করা হয় --> interface IUser {id:number; name:string; age:number}

type ডিক্ল্যার করা হয় --> type TUser={id:number; name:string; age:number}

**২। Extension :** interface এবং type দুইটাই এক্সটেন্ড করা যায় বাট এক্সটেন্ড করার প্রোসেস দুইটার আলাদা ।
interface এক্সটেন্ড করার জন্য extends কিওয়ার্ড ইউজ করা হয় ।
example :

interface A {x:number};
interface B extends A {y:string}

type এক্সটেন্ড করার জন্য & ইউজ করা হয় ।
example: type A= {x:number};
type B= A & {y:string};

**৩। Use Case:** interface মূলত অবজেক্টের স্ট্রাকচার ডিফাইন করতে ইউজ করা হয় লাইক Object , class etc.

type আরও ফ্লেক্সিবল এবং এটা প্রায় সব টাইপের ভ্যারিয়েবলে ইউজ করা যায়। লাইক Union , primitive type , tuple etc.

---

## What is the use of the keyof keyword in TypeScript? Provide an example.

**_Answer:_** **keyof** হলো টাইপস্ক্রিপ্টের একটি অপারেটর । এটা যে কোন অবজেক্ট টাইপের সব key গুলোকে একটি ইউনিউন টাইপ হিসেবে রিটার্ন করে । যখন কোন অবজেক্টের key গুলোকে টাইপ হিসেবে ইউজ করতে চাই তখন keyof অপারেটর ইউজ করা হয়।

**Example:**
ex-1

type Vehicles={bike:string; car:string; cng:string};
type MyVehicle = "bike"|"car"|"cng";
type MyVehicle1= keyof Vehicles;

এখানে টাইপ MyVehicle এবং MyVehicle1 দুইটাই সেম।

ex-2

interface User {
id:number;
name:string;
email:string;
}

type UserKeys=keyof User;

এখানে UserKeys টাইপ হবে "id"।"name"।"email"
