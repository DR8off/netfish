/*
MIT License

Copyright (c) 2024 Andrei DR8 Ustinov/Berezkin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Made by DR8
// GitHub: https://github.com/DR8off
// YouTube: https://youtube.com/@DR8off
// Telegram (For hiring and commercial proposals): https://t.me/DR8off

// HTTP Requests *************************************************************************

// Get method returns the JSON response of the requested resource.
// URL: String
export const get = async (url) => {
    if (!isValidUrl(url)) return false

    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const response = await fetch(url, options)

        if (!response.ok) {
            renderError('Network response error')
        }

        const data = await response.json()
        return data
    } catch(error) {
        console.error(`Netfish Error | ${error}`)
        throw error
    }
}

// Post method sends the body of the request to the desired resource and returns a response.
// URL: String, BODY: String
export const post = async (url, body) => {
    if (!isValidUrl(url)) return false
    if (!isValidBody(body)) return false

    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const response = await fetch(url, options)

        if (!response.ok) {
            renderError('Network response error')
        }

        const data = await response.json()
        return data
    } catch(error) {
        console.error(`Netfish Error | ${error}`)
        throw error
    }
}

// Put method updates an existing item on the server and returns a response.
// URL: String, BODY: String
export const put = async (url, body) => {
    if (!isValidUrl(url)) return false
    if (!isValidBody(body)) return false

    try {
        const options = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const response = await fetch(url, options)

        if (!response.ok) {
            renderError('Network response error')
        }

        const data = await response.json()
        return data
    } catch(error) {
        console.error(`Netfish Error | ${error}`)
        throw error
    }
}

// Patch method updates certain item data on the server and returns a response.
// URL: String, BODY: String
export const patch = async (url, body) => {
    if (!isValidUrl(url)) return false
    if (!isValidBody(body)) return false

    try {
        const options = {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const response = await fetch(url, options)

        if (!response.ok) {
            renderError('Network response error')
        }

        const data = await response.json()
        return data
    } catch(error) {
        console.error(`Netfish Error | ${error}`)
        throw error
    }
}

// Remove method deletes an element from the server and returns it.
// URL: String
export const remove = async (url) => {
    if (!isValidUrl(url)) return false

    try {
        const options = {
            method: 'DELETE',
        }

        const response = await fetch(url, options)

        if (!response.ok) {
            renderError('Network response error')
        }

        const data = await response.json()
        return data
    } catch(error) {
        console.error(`Netfish Error | ${error}`)
        throw error
    }
}
// ******************************************************************************

// Object Methods *****************************************************************************

// Passes a callback to each element of the object and returns a new object (does not change the object keys).
export const objMap = (obj, callback) => {
    if(!isNull(obj, callback)) return false
    if(!isObject(obj)) return false
    if(!isCallback(callback)) return false

    const result = {}
  
    for (key in obj) {
      result[key] = callback(obj[key])
    }
  
    return result
}

// Accepts the object, the index from which to start slicing, and the number of items to be sliced.
export const objSlice = (obj, from, to) => {
    if(!isNull(obj, from, to)) return false
    if(!isNumber(from, to)) return false
    if(!isObject(obj)) return false

    const result = {}
    const keys = Object.keys(obj)

    if (from > keys.length || to > keys.length) {
        renderError('Indexes cannot be larger than the object ')
        return
    }
    if (from < 0 || to < 0) {
        renderError('Indexes cannot be negative')
        return
    }

    for (let i = from; i < from + to; i++) {
        const key = keys[i]
        result[key] = obj[key] 
    }

    return result
}

// Accepts an object and callback to filter items. Returns the filtered object.
export const objFilter = (obj, callback) => {
    if(!isNull(obj, callback)) return false
    if(!isObject(obj)) return false
    if(!isCallback(callback)) return false

    const result = {}
    const keys = Object.keys(obj)

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (callback(obj[key])) {
            result[key] = obj[key]
        }
    }

    return result
}

// Accepts an object and returns a boolean value of whether there are duplicate values in the object.
export const objHasDuplicateValues = (obj) => {
    if(!isNull(obj)) return false
    if(!isObject(obj)) return false

    const set = new Set()
    const values = Object.values(obj)

    for (let value of values) {

        if (set.has(value)) {
            return true
        } else {
            set.add(value)
        }
    }

    return false
}
// ***************************************************************************************

// Micro Utils ***************************************************************

// Sets the value to local storage by key.
// Key: String
export const localSetItem = (key, value) => {
    if (!isString(key)) return false
    if (!isNull(key, value)) return false

    localStorage.setItem(key, JSON.stringify(value))
}

// Gets a value from local storage and parses it.
// Key: String
export const localGetItem = (key) => {
    if (!isString(key)) return false
    if (!isNull(key)) return false
    
    const storedItem = localStorage.getItem(key)
    return storedItem ? JSON.parse(storedItem) : renderError('Item not found')
}

// Returns the value key object of the entire localStorage
export const localGetAllItems = () => {
    return Object.keys(localStorage).reduce((acc, key) => {
        acc[key] = JSON.parse(localStorage.getItem(key))
        return acc
    }, {})
}

// Accepts a sentence, word or text separated by dots. Returns string value where the main word in the sentence starts with a capital letter.
// str: String
export const capitalize = (str) => {
    if (!isString(str)) return false

    const splittedText = str.split('.').map(e => e.trim())
    let isText = true

    if (splittedText.length === 1) {
        isText = false
    }

    return splittedText.map(e => {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }).join(`${isText ? '. ' : ''}`)
}

// Removes all double spaces and more from the text
// str: String
export const removeSpaces = (str) => {
    if (!isString(str)) return false

    const splittedStr = str.split(' ')
    return splittedStr.filter(e => e).join(' ')
}


// Error Handlers *******************************************************
export const renderError = (text) => {
    console.error(`Netfish Error | ${text}`)
}
export const isObject = (obj) => {
    if (typeof obj !== 'object') {
        renderError('The iterable object must be an object')
        return false
    }
    return true
}
export const isCallback = (callback) => {
    if (typeof callback !== 'function') {
        renderError('Callback must be a function')
        return false
    }
    return true 
}
export const isNull = (...args) => {
    for (let arg of args) {
        if (arg === null || arg === undefined) {
            renderError('The input data cannot be null or undefined')
            return false
        }
    }
    return true
}
export const isNumber = (...args) => {
    for (let arg of args) {
        if (isNaN(arg)) {
            renderError('Indexes must be numbers')
            return false
        }
    }
    return true
}
export const isString = (...args) => {
    for (let arg of args) {
        if (typeof arg !== 'string') {
            renderError('The input data must be string')
            return false
        }
    }
    return true
}
export const isValidUrl = (url) => {
    const urlPattern = /^(http|https):\/\/[^ "]+$/
    if (!urlPattern.test(url)) {
        renderError('Invalid URL format')
        return false
    }
    return true
}
export const isValidBody = (body) => {
    if (typeof body !== 'object') {
        renderError('The body of the request must be an object')
        return false
    }
    return true
}
// ***********************************************************************