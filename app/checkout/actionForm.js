"use server";

import fs from "fs/promises";

const patterns = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  name: /^[A-Za-z]+(?:[ '\-][A-Za-z]+)*$/,
  phone: /^(?:\+92|0092|0)3[0-9]{9}$/,
  address: /^[A-Za-z0-9\s,.\-#/]{5,100}$/,
  city: /^[A-Za-z]+(?:[ '\-][A-Za-z]+)*$/,
};

export async function checkoutForm(prevState, formData) {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const number = formData.get("number")?.toString().trim() ?? "";
  const address = formData.get("address")?.toString().trim() ?? "";
  const city = formData.get("city")?.toString().trim() ?? "";

  const values = { name, email, number, address, city };

  // 1. NAME
  if (!name) {
    return { success: false, field: "name", message: "Name is required", values };
  }
  if (!patterns.name.test(name)) {
    return { success: false, field: "name", message: "Name can only contain letters, spaces, apostrophes or hyphens", values };
  }

  // 2. EMAIL
  if (!email) {
    return { success: false, field: "email", message: "Email is required", values };
  }
  if (!patterns.email.test(email)) {
    return { success: false, field: "email", message: "Please enter a valid email (e.g. ali@example.com)", values };
  }

  // 3. PHONE
  if (!number) {
    return { success: false, field: "number", message: "Phone number is required", values };
  }
  if (!patterns.phone.test(number)) {
  return { success: false, field: "number", message: "Phone number must be 11 digits and start with 03 (e.g. 03001234567)", values };
}

  // 4. ADDRESS
  if (!address) {
    return { success: false, field: "address", message: "Address is required", values };
  }
  if (!patterns.address.test(address)) {
    return { success: false, field: "address", message: "Address must be 5 to 100 characters long", values };
  }

  // 5. CITY
  if (!city) {
    return { success: false, field: "city", message: "City is required", values };
  }
  if (!patterns.city.test(city)) {
    return { success: false, field: "city", message: "City can only contain letters", values };
  }

  // ---- Everything is valid, now save the order ----

  let cartItems = [];
  try {
    cartItems = JSON.parse(formData.get("cartItems") || "[]");
  } catch (err) {
    cartItems = [];
  }

  const userData = {
    name,
    email,
    number,
    address,
    city,
    cartItems,
    shipping: Number(formData.get("shipping")) || 0,
  };

  try {
    let submitData = [];
    try {
      const data = await fs.readFile("checkout.json", "utf-8");
      submitData = JSON.parse(data);
    } catch (err) {
      // If the file is missing or empty, start with a new array
      submitData = [];
    }

    submitData.push(userData);

    await fs.writeFile("checkout.json", JSON.stringify(submitData, null, 2));
  } catch (err) {
    // Vercel par file likhna allowed nahi, isliye order sirf logs mein dikhega
    console.log("Could not save to file:", err.message);
    console.log("New order:", userData);
  }

  return { success: true };
}