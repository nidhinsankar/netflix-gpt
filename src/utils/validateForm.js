

export const validate = (username,email,password) => {
    if (username) {
        const isusernamevalid = /^[a-z0-9_\.]+$/.test(username)
        console.log(isusernamevalid);
        if(!isusernamevalid) return 'Username is not valid';
    }
    const isemailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const ispasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)

    if(!isemailvalid) return 'Email is not valid';
    if(!ispasswordvalid) return 'Password is not valid';

    return null;
}