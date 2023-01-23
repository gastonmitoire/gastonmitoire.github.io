let dataUser;

const refreshButton = document.getElementById("refresh-button");
const profileImage = document.getElementById("user-img");
const userName = document.getElementById("user-name");
const contactList = document.getElementById("contact-list");

// FETCH API DATA
function getData() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((responseData) => {
      dataUser = responseData.results[0];

      generateNameHeader(dataUser);
      generateContactList(dataUser);

      profileImage.src = dataUser.picture["large"];
    })
    .catch((error) => console.error(error));
}

function generateNameHeader(data) {
  const logo = userName.querySelector(".logo");
  const title = userName.querySelector(".title").firstElementChild;
  logo.querySelector(".first").innerHTML = data.name.first.charAt(0);
  logo.querySelector(".last").innerHTML = data.name.last.charAt(0);
  title.innerHTML = data.name.first + " " + data.name.last;
}

function generateContactList(data) {
  const contactData = [
    {
      title: "Address",
      subtitle: `${data.location.street.name} ${data.location.street.number} - ${data.location.state} ${data.location.country}`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
    `,
    },
    {
      title: "Email",
      subtitle: `<a href="mailto:${data.email}">${data.email}</a>`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
    `,
    },
    {
      title: "Phone",
      subtitle: `<a href="tel:${data.phone}">${data.phone}</a>`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
    `,
    },
    {
      title: "Personal Phone",
      subtitle: `<a href="tel:${data.cell}">${data.cell}</a>`,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>`,
    },
  ];

  contactData.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `${item.icon}<div><p>${item.title}</p><p>${item.subtitle}</p></div>`;
    contactList.appendChild(li);
  });
}

// RELOAD DATA
refreshButton.onclick = () => {
  contactList.innerHTML = "";
  getData();
};

getData();
