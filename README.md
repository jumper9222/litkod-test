#### Tools used
- IDE: VSCode
- Deployment: Vercel
- AI Chatbot: Claude & ChatGPT
- Illustration: Inkscape
- Colour Picker: Windows PowerToys Color Picker

#### Steps
1. First attempt, using image element in HTML.
	1. Created keyframe animation to transform image
	2. Animation works but need to repeat image for continuous scrolling animation
	3. possible fix: nest another container and move images to this container then animate the container 
2. Second attempt, using background image in a nested div in earth container
	1. Modified keyframe animation to transform background instead of the container
	2. Faced issue with animation not working when background-size prop is assigned
	3. Realized that animation works only when the container size is different from the svg file size (container either bigger or smaller)
	4. Fixed the issue by setting the container width to 200%.

3. Another idea:
	1. Set earth texture to background on main earth container.
	2. Nest a cloud div in the earth container and animate the background
	3. After fixing issue with 2nd option, realized that this option is not viable as the container cannot be the same size as the svg file

4. After deployed on vercel, got 404 Error code
	1. Could it be no vercel config file?
	2. Did a quick google and was reminded that html file should be named index.html. 
	3. Another workaround is to create a vercel.json file to rewrite the destination to the specified html file. 