# 자바스크립트 비동기 프로그래밍
1. async
2. await
3. promise

- - -

## 비동기 프로그래밍이란?
정의한 코드가 완료되지 않아도 다음 코드를 실행하는 것
> ex) ajax, setTimeout()

<pre>
  <code>
    // #1
    console.log('Hello');
    // #2
    setTimeout(function () {
	    console.log('Bye');
    }, 3000);
    // #3
    console.log('Hello Again');
  </code>
</pre>
Hello가 실행되고 3초 후 Bye가 실행된 후 Hello Again이 실행 된다고 생각 할 수 있지만

실제로는 Hello가 실행된 후 Hello Again이 실행되고 3초 있다가 Bye가 실행된다.

- - -
## 비동기 처리가 필요한 이유
* 어느 한 코드를 실행하고 그 뒤에 따라오는 코드가 사용되기까지의 시간이 얼마나 걸릴지 모르기 때문에 사용한다.
> 서버로 데이터를 요청했을 때 서버가 언제 그 요청에 대한 응답을 줄지도 모르는데 마냥 다른 코드를 실행 안 하고 기다릴 순 없기 때문이다.
굉장히 많은 요청을 서버에 보냈을때 응답이 언제올지 모르기 때문에 코드를 실행하는데 굉장히 많은 시간이 낭비 될 수 있다.

- - -

## 1. async
async 함수는 Promise를 반환합니다.
<pre>
    <code>
       	const f = async () => {}
	f() // Promise
    </code>
</pre>

정상적인 동작으로 값을 반환하면 then에서 받을 수 있고
비정상적인 동작으로 에러가 발생하면 catch에서 받을 수 있다
<pre>
    <code>
    	// then
    	const f = async () => 'Hi!'
	f().then(console.log) // Hi!
	
	// catch
	const f = async () => die;
	f().catch(error => console.log('에러 발생!')) // 에러 발생!
    </code>
</pre>

### async 에서 promise 반환

async 함수의 반환값으로 Promise를 사용하면 호출자에서는 async 함수 사용과 동일하게 사용된다.

resolve 상태면 then으로 처리되고, reject 상태면 catch에서 처리된다.
<pre>
    <code>
    	const f = async () => Promise.resolve('Hi!')
	f().then(console.log) // Hi!
	
	const f = async () => Promise.reject('Hi!')
	f().catch(error => console.log('에러 발생!')) // 에러 발생!
    </code>
</pre>
- - -

## 2. await

Promise를 반환하는 코드를 다수 기술이 필요할 경우 await를 사용하면 읽기 쉽게 기술이 가능하다.

await는 resolve 상태의 값은 좌항에 바인딩하고, reject 상태는 async의 catch로 전달된다.

<pre>
    <code>
    	async function f() {
  	    const a = await 'a';
  	    const b = await 'b';
  	    return `${a}${b}`;
	}

	f().then(console.log) // ab
    </code>
</pre>

>function 키워드 앞에 async만 붙여주면 되고 비동기로 처리되는 부분 앞에 await만 붙여주면 됩니다.

다만, 몇 가지 주의할 점이 있다면 await 뒷부분이 반드시 promise 를 반환해야 한다는 것과 async function 자체도 promise 를 반환한다는 것입니다.


- - -

## 3. promise

- - -

참고 사이트
* https://chodragon9.github.io/blog/async-await-case/
* https://chodragon9.github.io/blog/promise/
* https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/
* https://medium.com/@shlee1353/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EB%8F%99%EA%B8%B0-async-await-promise-ae659eb1cb7e

