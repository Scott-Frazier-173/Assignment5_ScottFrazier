import React from "react";
import { useState } from "react";

import "./App.css";

// ASSIGNMENT REQUIREMENT 1: Component Structure - TaskList component
// TaskList component - receives tasks via props and renders them
function TaskList({ tasks }) {
	return (
		// ASSIGNMENT REQUIREMENT 1: TaskList renders tasks using .map()
		<ul className="list-group" style={{ fontSize: '20px', textAlign: 'left' }}>
			{tasks.map((task, index) => (
				<li key={index} className="list-group-item card-body" style={{ 
					padding: '20px', 
					marginBottom: '15px',
					textAlign: 'left'
				}}>
					<span className="mr-3" style={{ fontSize: '20px' }}>
						Task Name: {task.name}
					</span>
				</li>
			))}
		</ul>
	);
}

// ASSIGNMENT REQUIREMENT 1: Component Structure - TaskForm component
// TaskForm component - contains input field and Add Task button
function TaskForm({ currentInput, onInputChange, onAddTask }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		// ASSIGNMENT REQUIREMENT 3: Button click triggers handler to send data back to App
		onAddTask();
	};

	return (
		<div style={{ marginTop: '40px' }}>
			<form onSubmit={handleSubmit} style={{ 
				display: 'flex', 
				alignItems: 'center',
				gap: '10px'
			}}>
				{/* ASSIGNMENT REQUIREMENT 4: Controlled input using value and onChange */}
				<input
					type="text"
					className="form-control"
					placeholder="Add Task"
					value={currentInput} // ASSIGNMENT REQUIREMENT 4: Input value reflects App state
					onChange={(e) => onInputChange(e.target.value)} // ASSIGNMENT REQUIREMENT 4: onChange updates state
					style={{ 
						fontSize: '20px', 
						padding: '15px',
						height: '60px',
						flex: 1
					}}
				/>
				<button
					className="btn btn-outline-secondary"
					type="submit"
					style={{ 
						backgroundColor: '#BA0C2F', 
						color: 'white', 
						border: 'none',
						fontSize: '20px',
						padding: '15px 30px',
						height: '60px'
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}

// ASSIGNMENT REQUIREMENT 1: Component Structure - App component
// Main App component - manages state and connects child components
function App() {
	// ASSIGNMENT REQUIREMENT 2: useState to manage tasks array
	const [tasks, setTasks] = useState([
		{
			name: "Build Business website",
		},
		{
			name: "Implement social media plan",
		},
		{
			name: "Hire COO",
		},
	]);

	// ASSIGNMENT REQUIREMENT 2: useState to manage current input value (string)
	const [currentInput, setCurrentInput] = useState('');

	// ASSIGNMENT REQUIREMENT 3: Handler function passed to TaskForm
	const handleInputChange = (value) => {
		setCurrentInput(value);
	};

	// ASSIGNMENT REQUIREMENT 3: Handler function passed to TaskForm
	// ASSIGNMENT REQUIREMENT 2: Tasks stored in state and updated when user adds new one
	const handleAddTask = () => {
		if (currentInput.trim() !== '') {
			const newTask = {
				name: currentInput
			};
			setTasks([...tasks, newTask]); // ASSIGNMENT REQUIREMENT 2: Update tasks state
			setCurrentInput(''); // Clear input after submission
		}
	};

	return (
		<div className="App" style={{ 
			fontSize: '18px', 
			padding: '40px', 
			maxWidth: '1000px', 
			margin: '0 auto' 
		}}>
			<h1 style={{ 
				color: '#BA0C2F', 
				fontSize: '48px', 
				marginBottom: '40px' 
			}}>Task Manager Application</h1>
			
			{/* ASSIGNMENT REQUIREMENT 3: Pass task list to TaskList using props */}
			<TaskList tasks={tasks} />

			<br />
			
			{/* ASSIGNMENT REQUIREMENT 3: Pass handler functions from App to TaskForm using props */}
			<TaskForm 
				currentInput={currentInput}
				onInputChange={handleInputChange}
				onAddTask={handleAddTask}
			/>
		</div>
	);
}

export default App;
