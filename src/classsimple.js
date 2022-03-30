import { Component } from "react"

class ClassComponent extends ClassComponent {
    state = {counter : 0};

    handleDecrement = () => 
    this.setState (prevState =>({counter: prevState.counter}))
}