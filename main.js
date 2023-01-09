/*
    Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const notes = [
    {
    id:1,
    text:"Beginner Notes",
    author:"Mark",
    date:"August 1st 2022",
    topic:["Introduction", "Note-taking", "Studying Tips", "Beginner Topics"]
    
    },
    
    {
    id:2,
    text:"Intermediate Notes",
    author:"Jane",
    date:"September 1st 2022",
    topics:["Intermediate Topics", "Group Projects", "Final Project Guidlines", "Midterms"]
    },
    
    {
    id:3,
    text:"Final Notes",
    author:"Phillip",
    date:"November 1st 2022",
    topics:["Final Topics", "Final Progress Report", "Lab Time", "Final Presentation","Final Evaluation"]
    }
    ]
   
    const graduateBeginnerNotes = {
        id:4,
        text:"Graduate Notes Part 1",
        author:"Mark",
        date:"Janurary 15 2023",
        topics:["Introduction, Graduate Beginner Notes"],
        
    }
    
    const graduateIntermediateNotes = {

    id:5,
    text:"Graduate Notes Part 2",
    author:"Mark",
    date:"February 15 2023",
    topics:["Intermediate Topics, Midterm Project,"]
    }
    
    const graduateFinalNotes = {

    id:6,
    text:"Graduate Notes Part 3",
    author:"Mark",
    date:"March 30 2023",
    topics:["Final Grad Topics, Final Project"],
    }
    notes.push(graduateBeginnerNotes)
    notes.push(graduateIntermediateNotes)
    notes.push(graduateFinalNotes)
  
for (const note of notes){
    console.log(note.text)
}