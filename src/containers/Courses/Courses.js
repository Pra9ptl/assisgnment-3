import React, { Component } from 'react';
import './Courses.css';
// import { Link } from 'react-router-dom';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    // Task # 3
    courseSelectedHandler = (id, title) => {
        this.props.history.push("/courses/" + id + title);
        // this.props.history.push("/courses/" + title);
        // console.log(id);
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (
                                <article
                                    key={course.id}
                                    onClick={() => this.courseSelectedHandler(course.id, course.title)}
                                    className="Course">
                                    {course.title}
                                </article>
                            );
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Courses;