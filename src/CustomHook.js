import React, { Fragment, useState } from 'react'

const CustomHook = () => {
    const [salary, setsalary] = useState(500)
    const increamentSalary = () => {
        setsalary(salary + 500)
    }
    return [salary, increamentSalary]
}

export default CustomHook
