import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_S1hS4Z_9xU_MnDOUSstGGwYo8ojC1mA",
  authDomain: "edu-base-1304f.firebaseapp.com",
  projectId: "edu-base-1304f",
  storageBucket: "edu-base-1304f.firebasestorage.app",
  messagingSenderId: "180137593664",
  appId: "1:180137593664:web:77b8ee26f7680e857bc8a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Mentor Booking
window.bookSession = async () => {
  const student = prompt("Student Name");
  const mentor = prompt("Mentor Name");
  const date = prompt("Date");
  const time = prompt("Time");

  if (!student || !mentor) return;

  await addDoc(collection(db, "mentorBookings"), {
    student, mentor, date, time,
    createdAt: serverTimestamp()
  });

  alert("Mentor booked successfully!");
};

// Certificate
window.generateCertificate = async () => {
  const student = prompt("Student Name");
  const course = prompt("Course Name");
  const score = prompt("Score");

  if (!student || !course) return;

  await addDoc(collection(db, "certificates"), {
    student, course, score,
    issuedAt: serverTimestamp()
  });

  document.getElementById("certStudent").innerText = student;
  document.getElementById("certCourse").innerText = course;
  document.getElementById("certScore").innerText = score + "%";
  document.getElementById("certificateModal").style.display = "flex";
};

window.closeCertificate = () => {
  document.getElementById("certificateModal").style.display = "none";
};