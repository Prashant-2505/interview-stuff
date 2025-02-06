
 
 let user = {
    "people": [
      {
        "user": {
          "id": 1,
          "name": "Alice Johnson",
          "age": 28,
          "email": "alice.johnson@example.com",
          "address": "123 Maple Street, Springfield, IL"
        }
      },
      {
        "user": {
          "id": 2,
          "name": "Bob Smith",
          "age": 35,
          "email": "bob.smith@example.com",
          "address": "456 Oak Avenue, Lincoln, NE"
        }
      },
      {
        "user": {
          "id": 3,
          "name": "Carol White",
          "age": 30,
          "email": "carol.white@example.com",
          "address": "789 Pine Road, Orlando, FL"
        }
      },
      {
        "user": {
          "id": 4,
          "name": "David Brown",
          "age": 42,
          "email": "david.brown@example.com",
          "address": "321 Cedar Blvd, Austin, TX"
        }
      },
      {
        "user": {
          "id": 5,
          "name": "Emily Davis",
          "age": 25,
          "email": "emily.davis@example.com",
          "address": "654 Birch Lane, Denver, CO"
        }
      },
      {
        "user": {
          "id": 6,
          "name": "Frank Wilson",
          "age": 38,
          "email": "frank.wilson@example.com",
          "address": "987 Elm Street, Boston, MA"
        }
      },
      {
        "user": {
          "id": 7,
          "name": "Grace Lee",
          "age": 29,
          "email": "grace.lee@example.com",
          "address": "147 Poplar Street, Seattle, WA"
        }
      },
      {
        "user": {
          "id": 8,
          "name": "Henry Clark",
          "age": 33,
          "email": "henry.clark@example.com",
          "address": "258 Willow Ave, Nashville, TN"
        }
      },
      {
        "user": {
          "id": 9,
          "name": "Ivy Martin",
          "age": 27,
          "email": "ivy.martin@example.com",
          "address": "369 Redwood Dr, Phoenix, AZ"
        }
      },
      {
        "user": {
          "id": 10,
          "name": "Jack Thompson",
          "age": 45,
          "email": "jack.thompson@example.com",
          "address": "159 Maplewood St, Portland, OR"
        }
      }
    ]
  }

  function searchUser(key) {
    const lowerCaseKey = key.toLowerCase();
    
    return user?.people.filter((person) => {
        return (
            person.user.name.toLowerCase().includes(lowerCaseKey) ||
            person.user.email.toLowerCase().includes(lowerCaseKey) ||
            person.user.address.toLowerCase().includes(lowerCaseKey)
        );
    });
}



 console.log(searchUser("ali"))