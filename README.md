# WARNING!
0.0.2 current working version!

# Netfish

Netfish is a lightweight JavaScript library that provides a set of utility functions for handling HTTP requests and processing JavaScript objects. It is designed to simplify common tasks and streamline processes related to HTTP requests and object manipulation.
Also visit [Netfish Website](https://dr8off.github.io/netfish/) for more information

## Installation
npm i netfish 
or
yarn add netfish

## Functions

### HTTP Requests

#### `get(url)`

Returns the JSON response of the requested resource.

- `url`: String - the URL of the resource.

#### `post(url, body)`

Sends the body of the request to the desired resource and returns a response.

- `url`: String - the URL of the resource.
- `body`: String - the body of the request.

#### `put(url, body)`

Updates an existing item on the server and returns a response.

- `url`: String - the URL of the resource.
- `body`: String - the body of the request.

#### `patch(url, body)`

Updates certain item data on the server and returns a response.

- `url`: String - the URL of the resource.
- `body`: String - the body of the request.

#### `remove(url)`

Deletes an element from the server and returns it.

- `url`: String - the URL of the resource.

### Object Methods

#### `objMap(obj, callback)`

Passes a callback to each element of the object and returns a new object (does not change the object keys).

- `obj`: Object - the input object.
- `callback`: Function - the callback function.

#### `objSlice(obj, from, to)`

Accepts the object, the index from which to start slicing, and the number of items to be sliced.

- `obj`: Object - the input object.
- `from`: Number - the starting index for slicing.
- `to`: Number - the number of items to slice.

#### `objFilter(obj, callback)`

Accepts an object and callback to filter items. Returns the filtered object.

- `obj`: Object - the input object.
- `callback`: Function - the filter callback.

#### `objHasDuplicateValues(obj)`

Accepts an object and returns a boolean value of whether there are duplicate values in the object.

- `obj`: Object - the input object.

### Micro Utils

#### `localSetItem(key, value)`

Sets the value to local storage by key.

- `key`: String - the key for local storage.
- `value`: Any - the value to be stored.

#### `localGetItem(key)`

Gets a value from local storage and parses it.

- `key`: String - the key for local storage.

#### `localGetAllItems()`

Returns the key-value object of the entire localStorage.

#### `capitalize(str)`

Accepts a sentence, word, or text separated by dots. Returns a string where the main word in the sentence starts with a capital letter.

- `str`: String - the input text.

#### `removeSpaces(str)`

Removes all double spaces and more from the text.

- `str`: String - the input text.


## Example Usage

```javascript
import * as netfish from 'netfish'

// Make a GET request
const data = await netfish.get('https://api.example.com/data');
console.log(data);

// Manipulate an object
const obj = { a: 1, b: 2, c: 3 };
const mapped = netfish.objMap(obj, value => value * 2);
console.log(mapped);
```

## References

- GitHub: [https://github.com/DR8off/netfish](https://github.com/DR8off/netfish)
- YouTube: [https://youtube.com/@DR8off](https://youtube.com/@DR8off)
- Telegram (For hiring and commercial proposals): [https://t.me/DR8off](https://t.me/DR8off)

## License

Netfish is released under the MIT License
