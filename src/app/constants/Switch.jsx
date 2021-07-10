// thanks to claudiabdm for swtich button https://codepen.io/claudiabdm/pen/jOmOBMb?editors=0110
import React,{useEffect} from 'react'
import {switchBank} from '../../features/drum/drumSlice'
import {  useDispatch } from 'react-redux';

const Switch = (props) => {

	const darkMode = props.dark
	const dispatch = useDispatch();
	
	useEffect(() => {
	const toggleDarkMode = document.getElementById("toggleDarkMode");
	const darkIcon = document.getElementById("dark");
	const lightIcon = document.getElementById("light");
	const div = document.querySelector("div.container-fluid");

	if (darkMode) {
		darkIcon.classList.add('switch__svg--selected');
		lightIcon.classList.remove('switch__svg--selected');
		toggleDarkMode.classList.add('switch--dark');
		toggleDarkMode.classList.remove('switch--light');
		toggleDarkMode.setAttribute('aria-checked', true);
		div.classList.add("dark-scheme");
		div.classList.remove("light-scheme");
	} else {
		lightIcon.classList.add('switch__svg--selected');
		darkIcon.classList.remove('switch__svg--selected');
		toggleDarkMode.classList.add('switch--light');
		toggleDarkMode.classList.remove('switch--dark');
		toggleDarkMode.setAttribute('aria-checked', false);
		div.classList.add("light-scheme");
		div.classList.remove("dark-scheme");
	}
	
}, [darkMode]);

	return(
		<button id="toggleDarkMode" className="drum__button switch switch--light" type="button" role="switch" aria-checked="false" aria-label="Toggle dark mode" onClick={()=> {dispatch(switchBank())} } >
			<svg id="light" className="switch__svg switch__svg--selected switch__svg--light" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
			</svg>
			<svg id="dark" className="
						switch__svg switch__svg--dark
					" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
			</svg>
		</button>
	)
}

export default Switch;