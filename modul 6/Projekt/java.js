// async function restAPI() {
//  const response = await fetch("http://contact-api.devkarriere.de/");
//  console.log(response);
//  const body = await response.json();
//  console.log(body);
// }

// restAPI();

async function getAllContact() {
  const response = await fetch("http://contact-api.devkarriere.de/contacts");
  const result = await response.json();
  console.log(result);
}

async function getOneContact(id) {
  const response = await fetch(
    "http://contact-api.devkarriere.de/contacts/" + id
  );
  const result = await response.json();
  console.log(result);
}

const post = {
  address: {
    street: "Goetherweg",
    city: "Musterstadt",
    number: 3,
    postcode: 12345,
  },
  phone: [
    {
      label: "Mobil",
      value: "0123456789",
    },
    {
      label: "Festnetz",
      value: "9876543210",
    },
  ],
  name: {
    firstName: "Sohrab",
    lastName: "Mustermann",
  },
  birthDate: "1990-12-31T01:01:01.000Z",
  email: "sohrab.mustermann@musterdoamin.de",
};

async function postAPI() {
  const response = await fetch("http://contact-api.devkarriere.de/contacts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const result = await response.json();
  console.log(result);
}

const putContact = {
  address: {
    street: "Tulpenweg",
    city: "Musterstadt",
    number: 5,
    postcode: 12345,
  },
  phone: [
    {
      label: "Mobil",
      value: "0123456789",
    },
    {
      label: "Festnetz",
      value: "9876543210",
    },
  ],
  name: {
    firstName: "Sohrab",
    lastName: "Faizi",
  },
  birthDate: "1990-12-31T01:01:01.000Z",
  email: "sohrab.faizi@musterdoamin.de",
};
async function putAPI() {
  const response = await fetch(
    "http://contact-api.devkarriere.de/contacts/73",
    {
      method: "PUT",
      body: JSON.stringify(putContact),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const result = await response.json();
  console.log(result);
}

const patchContact = {
  birthDate: "1997-12-01T01:01:01.000Z",
};
async function patchAPI() {
  const response = await fetch(
    "http://contact-api.devkarriere.de/contacts/73",
    {
      method: "PATCH",
      body: JSON.stringify(patchContact),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const result = await response.json();
  console.log(result);
}

//async function deleteAPI() {
//  const response = await fetch(
//    "http://contact-api.devkarriere.de/contacts/73",
//    {
//      method: "DELETE",
//    }
//  );
//  console.log(response);
//  const result = await response.json();
//  console.log(result);
//}

getAllContact();
getOneContact(73);
//postAPI(post);
putAPI();
patchAPI();
//deleteAPI();
