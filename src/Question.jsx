import React from 'react';
import {useState, useEffect} from 'react';
import {MathJax} from 'better-react-mathjax';

const Question = () => {
    //Declaring an array of all Question IDs
    const quesId = ['AreaUnderTheCurve_901', 'BinomialTheorem_901', 'DifferentialCalculus2_901'];

    //Using useState hook to manage state of Question Statement
    const [quesTitle, setQuesTitle] = useState("");

    //Using useState hook to manage state of Question Indices
    const [id, setId] = useState(0);

    //Rendering Question statement at first render and only when Id increases or decreases
    useEffect(()=>{
        let ques = fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${quesId[id]}`)
        .then((ques1)=>{
            return ques1.json();
        })
        .then((data)=>{
            console.log(data);
            setQuesTitle(data[0].Question);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, [id]);
    
    //Function to increment the Id for next question
    const nextQues = () => {
        if(id == quesId.length-1){
            alert("You're already at the last question");
        }
        else{
            setId(id+1);
        }
    }

    //Function to decrement the Id for previous question
    const prevQues = () => {
        if(id == 0){
            alert("You're already at the first question");
        }
        else{
            setId(id-1);
        }
    }

    return (
        <section id="ques-section">
            <div className="ques-div">
                <div className="container">
                    <div className="row">
                        <div className="question-items">
                            <div className="ques-title py-5">
                                <p className="pt-5">Question {id+1}</p>
                                <p className="py-2"><MathJax>{quesTitle}</MathJax></p>
                            </div>
                            <div className="buttons d-flex">
                                <button id="prev-ques-btn" className="toggle-btn mx-4" onClick={prevQues}><i class="fa-solid fa-circle-chevron-left"></i> Previous</button>
                                <button id="next-ques-btn" className="toggle-btn mx-4" onClick={nextQues}>Next <i class="fa-solid fa-circle-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Question;