export const setLocalStorage = (key, value) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error("Error saving to localStorage", error);
	}
};

export const getLocalStorage = (key, defaultValue = null) => {
	try {
		const stored = localStorage.getItem(key);
		return stored ? JSON.parse(stored) : defaultValue;
	} catch (error) {
		console.error("Error reading from localStorage", error);
		return defaultValue;
	}
};

export const removeLocalStorage = (key) => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.error("Error removing from localStorage", error);
	}
};
