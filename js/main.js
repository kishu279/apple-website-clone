// Modal functionality for Buy button
function openBuyModal(event, productName) {
  event.preventDefault();
  const modal = document.getElementById("buyModal");
  const productInput = document.getElementById("productName");
  const modalTitle = document.getElementById("modalTitle");

  productInput.value = productName;
  modalTitle.textContent = `Purchase ${productName}`;
  modal.style.display = "block";

  // Prevent body scroll when modal is open
  document.body.style.overflow = "hidden";
}

function closeBuyModal() {
  const modal = document.getElementById("buyModal");
  modal.style.display = "none";

  // Re-enable body scroll
  document.body.style.overflow = "auto";

  // Reset form
  document.getElementById("buyForm").reset();
}

function handleBuySubmit(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // Display success message
  alert(
    `Thank you for your order!\n\nOrder Details:\nProduct: ${data.productName}\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nQuantity: ${data.quantity}\n\nWe will contact you shortly to confirm your order.`
  );

  // Close modal and reset form
  closeBuyModal();

  // In a real application, you would send this data to a server
  console.log("Order submitted:", data);
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("buyModal");
  if (event.target === modal) {
    closeBuyModal();
  }
};

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("buyModal");
    if (modal.style.display === "block") {
      closeBuyModal();
    }
  }
});
