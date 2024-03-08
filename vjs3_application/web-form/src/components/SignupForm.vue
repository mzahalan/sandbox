<template>
    <form @submit.prevent="handleSubmit">
        <label>Email</label>
        <input type="email" v-model="email" required>
        <label>Password</label>
        <input type="password" v-model="password" required> 
        <div class="error" v-if="passwordError">{{ passwordError }}</div>
        <label>Role</label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>
        <label >skills</label>
        <input type="text" v-model="tempSkill" @keyup="commaCheck">
        <div v-for="skill in skills" :key="skill" class="pill" @click="deleteMe(skill)">
            {{ skill }}
        </div>
        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept Terms and Conditions</label>
        </div>
        <div class="submit">
            <button>Create an Account</button>
        </div>
    </form>
</template>


<script>
// Challenge - Delete Skills.
export default {
    data() {
        return {
            email: 'mario@amazon.com',
            password: '',
            role: 'developer',
            terms: true,
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        commaCheck(e) {
            if(e.key === ',') {
                let newSkill = this.tempSkill.slice(0,-1)
                this.tempSkill = ''

                if(newSkill.length > 0 && !this.skills.includes(newSkill)) {
                    this.skills.push(newSkill)
                }
            }
        },
        deleteMe(skill) {
            this.skills = this.skills.filter((s) => {
                return s !== skill
            })
        },
        handleSubmit() {
            // validate password
            this.passwordError = this.password.length > 5 ? "" : "Error Password must be greater than 5 characters"

            if(!this.passwordError) {
                console.log('email: ', this.email)
                console.log('password: ', this.password)
                console.log('role: ', this.role)
                console.log('skills: ', this.skills)
                console.log('terms accepted: ', this.terms)
            }
        }
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

div.pill {
    background-color: #eee;
    border: 1px solid #fff;
    color: #555;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 16px;
    font-weight: bold;
}

button {
    background: #0b6dff;
    border: 0px;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}

div.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>