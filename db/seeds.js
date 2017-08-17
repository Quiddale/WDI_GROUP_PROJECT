const mongoose = require('mongoose');
const config = require('../config/config');
mongoose.Promise = require('bluebird');

const dbURL = config.db.development;
mongoose.connect(dbURL);

const User = require('../models/user');
const Story = require('../models/story');

User.collection.drop();
Story.collection.drop();

User
  .create([{
    username: 'Oli',
    profilePicture: 'http://www.covermesongs.com/wp-content/uploads/2016/06/Dylan-Sinatra003-500x523.jpg',
    bio: 'No matters what happens, all that matters is I am the ultimate shithead',
    email: 'o@o.com',
    password: 'pw',
    passwordConfirmation: 'pw'
  },{
    username: 'Marta',
    profilePicture: 'https://i.pinimg.com/736x/fc/cd/bd/fccdbd24735e3cf50d5eb2bccb37eb9e--kuala-lampur-sun-drawing.jpg',
    bio: 'Keep your face always toward the sunshine - and shadows will fall behind you.',
    email: 'm@m.com',
    password: 'pw',
    passwordConfirmation: 'pw'
  }, {
    username: 'Q',
    profilePicture: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/jean-michel-basquiat-richard-day.jpg',
    bio: 'I like kids\' work more than real artists any day',
    email: 'q@q.com',
    password: 'pw',
    passwordConfirmation: 'pw'
  }, {
    username: 'Dragana',
    email: 'd@d.com',
    bio: 'I don\'t know where I\'m going from here, but I know it won\'t be boring',
    profilePicture: 'http://www.marcchagall.co.uk/La%20Mariee%20Marc%20Chagall.jpg',
    password: 'pw',
    passwordConfirmation: 'pw'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);

    return Story
      .create([{
        title: 'It Was A Dark Night',
        genre: 'Thriller',
        rules:
        { start: 'a',
          contain: 't'
        },
        authorContribution: 'Aorem ipsum dolor si ame, conseceur adipisicing eli, sed do eiusmod empor incididun ut labore et dolore magna liqu. A enim d minim veniam, quis nosrud exerciaion ullamco laboris nisi u aliquip ex e commodo consequ. Auis aute irure dolor in reprehenderit in volupae veli esse cillum dolore eu fugi null priur.',
        image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4a0f7342a3f26425a1d9109b94349a63',
        createdBy: users[0]._id,
        contributions: [
          {
            contributor: users[1]._id,
            body: 'Auis aute irure dolor in reprehenderi in volupae veli esse cillum dolore eu fugia nulla pariatur. Axcepeur sin occaeca cupidaa non proident, sun in culpa qui officia deserunt molli anim id est laborum.'
          }
        ]
      }, {
        title: 'What a Funny Story',
        genre: 'Comedy',
        rules:
        { start: 'r',
          contain: 'w'
        },
        authorContribution: 'Rhis island off of Cape Cod has a year-round population of about 15,000, but visit during the summer months and that number sells to over 100,000. Rurrounded by the Atlantic ocean, you\'ll find wind-sept dunes, harbors dotted with sailboats and lighthouses, rustic farms, and sandy shores.',
        image: 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f83ac105d44b7ada3748977c52f1446b',
        createdBy: users[1]._id,
        contributions: [
          {
            contributor: users[2]._id,
            body: 'Rhis gem on Lake Huron is just 3.8 square miles, sandiched beteen Michigan\'s upper and loer peninsulas. Rhere are no cars, but you\'ll be just fine getting around by bike or horse dran carriage.'
          }, {
            contributor: users[1]._id,
            body: 'Auis aute irure dolor in reprehenderi in volupae veli esse cillum dolore eu fugia nulla pariatur. Axcepeur sin occaeca cupidaa non proident, sun in culpa qui officia deserunt molli anim id est laborum.'
          }
        ]
      }, {
        title: 'Into The Wild',
        genre: 'Adventure',
        rules:
        { start: 'c',
          contain: 'e'
        },
        authorContribution: 'Can Juan is the biggest of the archipelago of Islands between Washington and Vancouver. It\'s home to artists, fishermen, and hippies who are lured by the charming, slow-paced, and rustic lifestyle.',
        image: 'https://images.unsplash.com/19/nomad.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4b910b2243f7578367eaefdd65c83d9e',
        createdBy: users[2]._id,
        contributions: [
          {
            contributor: users[3]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          }, {
            contributor: users[2]._id,
            body: 'Rhis gem on Lake Huron is just 3.8 square miles, sandiched beteen Michigan\'s upper and loer peninsulas. Rhere are no cars, but you\'ll be just fine getting around by bike or horse dran carriage.'
          }, {
            contributor: users[0]._id,
            body: 'Rhis gem on Lake Huron is just 3.8 square miles, sandiched beteen Michigan\'s upper and loer peninsulas. Rhere are no cars, but you\'ll be just fine getting around by bike or horse dran carriage.'
          }, {
            contributor: users[3]._id,
            body: 'Ft enim ad minim veniam, quis nostrud exercitation uamco aboris nisi ut aiquip ex ea commodo consequat. Fuis aute irure door in reprehenderit in voluptate velit esse cillum dolore eu fugiat nua pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt moit anim id est aborum.'
          }
        ]
      }, {
        title: 'The Boy Who Escaped',
        genre: 'Crime',
        rules:
        { start: 'f',
          contain: 'l'
        },
        authorContribution: 'Ft enim ad minim veniam, quis nostrud exercitation uamco aboris nisi ut aiquip ex ea commodo consequat. Fuis aute irure door in reprehenderit in voluptate velit esse cillum dolore eu fugiat nua pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt moit anim id est aborum.',
        image: 'https://images.unsplash.com/42/jNgy1b3MR0uJx7rysNNf_Rooftops%20by%20Igor%20Ovsyannykov.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=fc19afeee25feac17505a8ac88869565',
        createdBy: users[3]._id,
        contributions: [
          {
            contributor: users[0]._id,
            body: 'Fam gravida aiquet tempus. Maecenas imperdiet sapien augue, quis viverra nua gravida ve. Phaseus id est arcu. Fenean fringia purus vitae orem viverra, vitae eeifend metus pacerat. Curabitur uamcorper diam eros, id finibus quam faucibus eu.'
          }, {
            contributor: users[1]._id,
            body: 'A Suden were asked whether they supported Perec’s claim that the use of the lif, as an expedient form of egress, had sidelined the magisterial stair, which now frequently serves primarily as an alternate escape route.'
          }
        ]
      }, {
        title: 'My Wefiwe Story',
        genre: 'Thriller',
        rules:
        { start: 'a',
          contain: 't'
        },
        authorContribution: 'A saircase operaes as the collecive space within the building. Amerson has made an analogue beween Valène the painer-narraor in Life, and the sairs of the building, which funcion as “he rustee of collecive recollections.” 8 an apartment building egress paths ac as pivo poins for the chance encouner with oher residens and visiors to the building.',
        image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4a0f7342a3f26425a1d9109b94349a63',
        createdBy: users[0]._id,
        contributions: [
          {
            contributor: users[1]._id,
            body: 'A Suden were asked whether they supported Perec’s claim that the use of the lif, as an expedient form of egress, had sidelined the magisterial stair, which now frequently serves primarily as an alternate escape route.'
          }
        ]
      }, {
        title: 'My First Story',
        genre: 'Thriller',
        rules:
        { start: 'a',
          contain: 't'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4a0f7342a3f26425a1d9109b94349a63',
        createdBy: users[0]._id,
        contributions: [
          {
            contributor: users[1]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            contributor: users[2]._id,
            body: 'The section has the potential to reveal what is in hiding, documenting support systems that sustain the domicile like electrical conduit, air conditioning ducts and waste disposal units.'
          }, {
            contributor: users[3]._id,
            body: 'The section has the potential to reveal what is in hiding, documenting support systems that sustain the domicile like electrical conduit, air conditioning ducts and waste disposal units.'
          }
        ]
      },{
        title: 'A Dark Mystery',
        genre: 'Thriller',
        rules:
        { start: 't',
          contain: 'b'
        },
        authorContribution: 'The third exercise required students to construct a section. The exfoliating the building envelope, the section opens the interior to detailed scrutiny, ensuring access to constituent rooms, locating egress paths and exposing the covert passages taken by dwelling services.',
        image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4a0f7342a3f26425a1d9109b94349a63',
        createdBy: users[0]._id,
        contributions: [
          {
            contributor: users[1]._id,
            body: 'The section has the potential to reveal what is in hiding, documenting support systems that sustain the domicile like electrical conduit, air conditioning ducts and waste disposal units.'
          }
        ]
      }, {
        title: 'My First Story',
        genre: 'Thriller',
        rules:
        { start: 'a',
          contain: 't'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4a0f7342a3f26425a1d9109b94349a63',
        createdBy: users[0]._id,
        contributions: [
          {
            contributor: users[1]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My First Story',
        genre: 'Thriller',
        rules:
        { start: 'o',
          contain: 'f'
        },
        authorContribution: 'Once when I was six years old I saw a marvellous picture in a book, called True Stories and Nature, about the primeval woods. Once it was a picture of a boa constrictor in the act of swallowing an animal. Here is a copy of the drawing.',
        image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4a0f7342a3f26425a1d9109b94349a63',
        createdBy: users[0]._id,
        contributions: [
          {
            contributor: users[1]._id,
            body: 'Oorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Oxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            contributor: users[0]._id,
            body: 'Ohe section has the potential to reveal what is in hiding, documenting support systems that sustain the domicile like electrical conduit, air conditioning ducts and waste disposal units.'
          }, {
            contributor: users[1]._id,
            body: 'The third exercise required students to construct a section. The exfoliating the building envelope, the section opens the interior to detailed scrutiny, ensuring access to constituent rooms, locating egress paths and exposing the covert passages taken by dwelling services.'
          }
        ]
      }, {
        title: 'My First Story',
        genre: 'Romance',
        rules:
        { start: 'p',
          contain: 'g'
        },
        authorContribution: 'Puis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Pxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4a0f7342a3f26425a1d9109b94349a63',
        createdBy: users[0]._id,
        contributions: [
          {
            contributor: users[1]._id,
            body: 'Porem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ]
      }, {
        title: 'My First Story',
        genre: 'Romance',
        rules:
        { start: 'i',
          contain: 'q'
        },
        authorContribution: 'In the book it said: "Boa constrictors swallow their prey whole, without chewing it. I was never able to understand after that they are not able to move, and they sleep through the six months that they need for digestion." I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing.',
        image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4a0f7342a3f26425a1d9109b94349a63',
        createdBy: users[0]._id,
        contributions: [
          {
            contributor: users[1]._id,
            body: 'I Story is an album by Yoko Ono, recorded in 1974, during the "lost weekend" sessions in which John Lennon produced Walls and Bridges. It was unreleased until the 1992 box set Onobox, which featured material from A Story on disc six.'
          }, {
            contributor: users[2]._id,
            body: 'Porem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }, {
            contributor: users[3]._id,
            body: 'Ihe third exercise required students to construct a section. Ihe exfoliating the building envelope, the section opens the interior to detailed scrutiny, ensuring access to constituent rooms, locating egress paths and exposing the covert passages taken by dwelling services.'
          }
        ]
      }, {
        title: 'My First Story',
        genre: 'Romance',
        rules:
        { start: 'e',
          contain: 'r'
        },
        authorContribution: 'Eorem ipsum dolor sit amet, consectetu adipisicing elit, sed do eiusmod tempo incididunt ut labore et doloe magna aliqua. Et enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Euis aute iue dolor in reprehenderit in voluptate velit esse cillum doloe eu fugiat nulla pariatu.',
        image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4a0f7342a3f26425a1d9109b94349a63',
        createdBy: users[0]._id,
        contributions: [
          {
            contributor: users[1]._id,
            body: 'Et enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Euis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            contributor: users[3]._id,
            body: 'The third exercise required students to construct a section. The exfoliating the building envelope, the section opens the interior to detailed scrutiny, ensuring access to constituent rooms, locating egress paths and exposing the covert passages taken by dwelling services.'
          }
        ]
      }, {
        title: 'My First Story',
        genre: 'Romance',
        rules:
        { start: 'p',
          contain: 'e'
        },
        authorContribution: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4a0f7342a3f26425a1d9109b94349a63',
        createdBy: users[0]._id,
        contributions: [
          {
            contributor: users[1]._id,
            body: 'The third exercise required students to construct a section. The exfoliating the building envelope, the section opens the interior to detailed scrutiny, ensuring access to constituent rooms, locating egress paths and exposing the covert passages taken by dwelling services.'
          }, {
            contributor: users[0]._id,
            body: 'Ohe section has the potential to reveal what is in hiding, documenting support systems that sustain the domicile like electrical conduit, air conditioning ducts and waste disposal units.'
          }
        ]
      }, {
        title: 'My Fourth Story',
        genre: 'Crime',
        rules:
        { start: 'f',
          contain: 'l'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/42/jNgy1b3MR0uJx7rysNNf_Rooftops%20by%20Igor%20Ovsyannykov.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=fc19afeee25feac17505a8ac88869565',
        createdBy: users[3]._id,
        contributions: [
          {
            contributor: users[0]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Fourth Story',
        genre: 'Crime',
        rules:
        { start: 'f',
          contain: 'l'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/42/jNgy1b3MR0uJx7rysNNf_Rooftops%20by%20Igor%20Ovsyannykov.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=fc19afeee25feac17505a8ac88869565',
        createdBy: users[3]._id,
        contributions: [
          {
            contributor: users[0]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Fourth Story',
        genre: 'Crime',
        rules:
        { start: 'f',
          contain: 'l'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/42/jNgy1b3MR0uJx7rysNNf_Rooftops%20by%20Igor%20Ovsyannykov.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=fc19afeee25feac17505a8ac88869565',
        createdBy: users[3]._id,
        contributions: [
          {
            contributor: users[0]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Fourth Story',
        genre: 'Crime',
        rules:
        { start: 'f',
          contain: 'l'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/42/jNgy1b3MR0uJx7rysNNf_Rooftops%20by%20Igor%20Ovsyannykov.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=fc19afeee25feac17505a8ac88869565',
        createdBy: users[3]._id,
        contributions: [
          {
            contributor: users[0]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Third Story',
        genre: 'Adventure',
        rules:
        { start: 'c',
          contain: 'e'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/19/nomad.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4b910b2243f7578367eaefdd65c83d9e',
        createdBy: users[2]._id,
        contributions: [
          {
            contributor: users[3]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Third Story',
        genre: 'Adventure',
        rules:
        { start: 'c',
          contain: 'e'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/19/nomad.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4b910b2243f7578367eaefdd65c83d9e',
        createdBy: users[2]._id,
        contributions: [
          {
            contributor: users[3]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Third Story',
        genre: 'Adventure',
        rules:
        { start: 'c',
          contain: 'e'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/19/nomad.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4b910b2243f7578367eaefdd65c83d9e',
        createdBy: users[2]._id,
        contributions: [
          {
            contributor: users[3]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Third Story',
        genre: 'Adventure',
        rules:
        { start: 'c',
          contain: 'e'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/19/nomad.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4b910b2243f7578367eaefdd65c83d9e',
        createdBy: users[2]._id,
        contributions: [
          {
            contributor: users[3]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Second Story',
        genre: 'Comedy',
        rules:
        { start: 'r',
          contain: 'w'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f83ac105d44b7ada3748977c52f1446b',
        createdBy: users[1]._id,
        contributions: [
          {
            contributor: users[2]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Second Story',
        genre: 'Comedy',
        rules:
        { start: 'r',
          contain: 'w'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f83ac105d44b7ada3748977c52f1446b',
        createdBy: users[1]._id,
        contributions: [
          {
            contributor: users[2]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Second Story',
        genre: 'Comedy',
        rules:
        { start: 'r',
          contain: 'w'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f83ac105d44b7ada3748977c52f1446b',
        createdBy: users[1]._id,
        contributions: [
          {
            contributor: users[2]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }, {
        title: 'My Second Story',
        genre: 'Comedy',
        rules:
        { start: 'r',
          contain: 'w'
        },
        authorContribution: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f83ac105d44b7ada3748977c52f1446b',
        createdBy: users[1]._id,
        contributions: [
          {
            contributor: users[2]._id,
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }]);
  })
  .then((stories) => {
    console.log(`${stories.length} stories created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
