export function validateName(name) {
  if (name.length == 60 || name.length > 60)
    return "Name cannot exceed 100 characters";
  if (name.trim() === "") {
    return "Name is required";
  }
  // Patrón de expresión regular que busca solo letras y espacios
  return "";
}

export function validateDescription(description) {
  if (description.trim() === "") {
    return "Description is required";
  }
  return "";
}

export function validateCategory(category) {
  if (!category) {
    return "Category cannot be empty";
  }
  return "";
}

export function validateStock(stock) {
  if (stock < 0) return "Inventory must be greater than zero";
  if (stock === 0) return "Inventory cannot be zero";

  if (!/^\d+$/.test(stock)) return "Invalid inventory value";

  return "";
}

export function validatePrice(price) {
  if (price < 0) return "Price must be greater than 0";
  if (price == 0) return "Price cannot be cero";

  return "";
}

export function validateDiscount(discount) {
  if (discount < 0) return "Discount must be greater than 0";
  if (discount > 100) return "Discount cannot be greater than 100%.";
  return "";
}

export function validateRating(rating) {
  if (rating < 0) return "Rating must be greater than 0";
  if (rating == 0) return "Rating cannot be cero";
  if (rating > 5) return "The score must not exceed 5";

  return "";
}

export function isNumericInput(input) {
  const numericRegex = /^[0-9]+$/;
  return !numericRegex.test(input);
}
