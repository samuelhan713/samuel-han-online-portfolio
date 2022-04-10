import { FaJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export const portfolio1 = [
    {
        id: 1,
        title: "Tic Tac Toe",
        img: "assets/tictactoe.png",
        p: "This is a Java tic tac toe program that I made during my first semester of college. We utilized the object-oriented aspect of Java to create this program.",
        icon: <FaJava size={30} color="darkblue" left="10px"/>,
        pLink: "https://github.com/samuelhan713/Object-Oriented-Programming-Assignments/blob/main/TicTacToe.java"
    },

    {
        id: 2,
        title: "Mobius & Teddy Bear Game",
        img: "assets/mobius.png",
        p: "This code generates a mobius using string manipulation. I also included the teddy bear game using recursion, which I learned in this class.",
        icon: <FaJava size={30} color="darkblue"/>,
        pLink: "https://github.com/samuelhan713/Object-Oriented-Programming-Assignments/tree/main/mobius%26teddy"
    },
]; 

export const portfolio2 = [
    {
        id: 1,
        title: "Pacman",
        img: "assets/pacman.png",
        p: "A Java implementation of the Pacman game using the following data structures: heaps, circularly-linkedlists, circular-deques.",
        icon: <FaJava size={30} color="darkblue"/>,
        icon2: <img src="https://www.logolynx.com/images/logolynx/d9/d94bcff71328e56a7a3949963865c62c.png" width="30"/>,
        pLink: "https://github.com/samuelhan713/Data-Structure-Assignments/tree/main/pacman"
    },

    {
        id: 2,
        title: "Snake",
        img: "assets/snake.png",
        p: "A Java snake game implemented with the following data structures: dynamic arrays, deques.",
        icon: <FaJava size={30} color="darkblue"/>,
        icon2: <img src="https://www.logolynx.com/images/logolynx/d9/d94bcff71328e56a7a3949963865c62c.png" width="30"/>,
        pLink: "https://github.com/samuelhan713/Data-Structure-Assignments/tree/main/snake"
    },

 
];

export const portfolio3 = [
    {
        id: 1,
        title: "Student Profile Database Manager",
        img: "assets/studentApplicationManagerScm.png",
        p: "This program manipulates information of students and filters students depending on certain criteria. This program was written in Scheme (purely functional subset).",
        icon: <img src="https://users.cs.northwestern.edu/~robby/logos/plt-logo-red-shiny.svg" width="30"/>,
        pLink: "https://github.com/samuelhan713/Programming-Abstractions-Assignments/tree/main/StudentApplicationManager"
    },

    {
        id: 2,
        title: "Student Profile Database Manager v.2",
        img: "assets/studentApplicationManagerC.png",
        p: "This program manipulates the information of students and filters students depending on certain criteria. This program was written in C. Data structures used: linkedlist.",
        icon: <img src="https://img.icons8.com/color/48/000000/c-programming.png" width="33"/>,
        pLink: "https://github.com/samuelhan713/Programming-Abstractions-Assignments/tree/main/studentApplicationManger2"
    },

];

export const portfolio4 = [
    {
        id: 1,
        title: "Recursive Search Algorithm",
        img: "assets/findNumdots.png",
        p: "A recursive searching algorithm implemented with MIPS assembly language. Takes in user input to look for in a predetermined array.",
        icon: <img src="https://www.motorcycle.com/blog/wp-content/uploads/2020/01/MIPS-LOGO-2018-RGB_feature.jpg" width="45"/>,
        pLink: "https://github.com/samuelhan713/System-Fundamentals-Assignments/blob/main/recursiveSearch.s"
    },

    {
        id: 2,
        title: "Sum of all Squares",
        img: "assets/sumSq.png",
        p: "This program finds the sum of the squares of all of the descending numbers given a user input. Implemented using MIPS assembly language.",
        icon: <img src="https://www.motorcycle.com/blog/wp-content/uploads/2020/01/MIPS-LOGO-2018-RGB_feature.jpg" width="45"/>,
        pLink: "https://github.com/samuelhan713/System-Fundamentals-Assignments/blob/main/recursiveSum.s"
    },
];
