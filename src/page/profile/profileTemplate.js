let profileTemplate = `<div class="account-info py-3">
    <header class="py-2"> Account Detail <span class="pl-2 edit"><i class="far fa-edit"></i></span></header>
    <div class="form-group py-2">
        <label for="username"> Username </label>
        <input disabled type="text" id="username" class="input-reset" value={{username}}>
    </div>
    <div class="form-group py-2">
        <label for="email"> Email </label>
        <input disabled type="text" id="email" class="input-reset no-edit" value={{ email}}>
    </div>
    <div class="form-group py-2">
        <label for="password"> Password </label>
        <input disabled type="password" id="password" class="input-reset" value={{password}}>
    </div>
</div>`;
export {profileTemplate}