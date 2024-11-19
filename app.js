// code war masalalari
{
	function multiply(a, b) {
		return a * b
	}
}

{
	function evenOrOdd(number) {
		if (number % 2 === 0) {
			return 'Even'
		} else {
			return 'Odd'
		}
	}
}

{
	function numberToString(num) {
		return String(num)
	}
}

{
	function solution(str) {
		return str.split('').reverse().join('')
	}
}

{
	function solution(str) {
		return str.split('').reverse().join('')
	}
}

{
	function makeNegative(num) {
		return num === 0 ? 0 : -Math.abs(num)
	}
}

{
	function opposite(number) {
		return -number
	}
}

{
	function positiveSum(arr) {
		return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0)
	}
}

{
	function repeatStr(n, s) {
		return s.repeat(n)
	}
}

{
	function removeChar(str) {
		return str.slice(1, -1)
	}
}

// ustoz bergan vazifalar
// masala 1
function filterPositiveNumbers(arr) {
	return arr.filter(number => number > 0)
}

const numbers = [3, 9, 3, -7, 8, 10, -1]
const positiveNumbers = filterPositiveNumbers(numbers)
console.log(positiveNumbers)

// masala 2
{
	let str = 'box'
	str = str.charAt(0).toUpperCase() + str.slice(1)
	console.log(str)
}

// masala 3
{
	function reverseNumber(num) {
		return Number(num.toString().split('').reverse().join('')) * Math.sign(num)
	}

	console.log(reverseNumber(12345))
}

// masala 4
{
	function filterFalseValues(arr) {
		return arr.filter(value => value === false)
	}

	const values = [true, false, true, false, false, true]
	console.log(filterFalseValues(values))
}

{
	// masala 5
	function sumPositiveNumbers(arr) {
		return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0)
	}

	const numbers = [-3, 5, -7, 8, 10, -1]
	console.log(sumPositiveNumbers(numbers))
}
