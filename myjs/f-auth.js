initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function (accessToken) {
                document.getElementById('sign-in-status').textContent = 'Signed in';
                document.getElementById('sign-in').textContent = 'Sign out';
                document.getElementById('account-details').textContent = JSON.stringify({
                    displayName: displayName,
                    email: email,
                    emailVerified: emailVerified,
                    phoneNumber: phoneNumber,
                    photoURL: photoURL,
                    uid: uid,
                    accessToken: accessToken,
                    providerData: providerData
                }, null, '  ');
            });

            //
            var accountDropdown = document.createElement('div');
            accountDropdown.setAttribute('class', 'dropdown')

            var button = document.createElement('button');
            button.textContent = email;
            button.setAttribute('class', 'btn btn-info dropdown-toggle my-2 my-sm-0 mr-4');
            button.setAttribute('type', 'button');
            button.setAttribute('id', 'accountDropdownButton');
            button.setAttribute('data-toggle', 'dropdown');
            button.setAttribute('aria-haspopup', 'true');
            button.setAttribute('aria-expanded', 'false');
            button.textContent = email;

            var dropdownMenu = document.createElement('div');
            dropdownMenu.setAttribute('class', 'dropdown-menu dropdown-menu-left mt-2');
            dropdownMenu.setAttribute('aria-labelledby', 'accountDropDownButton');

            var a1 = document.createElement('button');
            a1.setAttribute('class', 'dropdown-item btn btn-primary');
            a1.setAttribute('href', 'account-details.html');
            a1.textContent = 'Account Details';

            var a2 = document.createElement('button');
            a2.setAttribute('class', 'dropdown-item btn btn-primary');
            a2.textContent = 'Some Action';

            var a3 = document.createElement('button');
            a3.setAttribute('class', 'dropdown-item btn btn-primary');
            a3.textContent = 'Log Out';
            
            dropdownMenu.appendChild(a1);
            dropdownMenu.appendChild(a2);
            dropdownMenu.appendChild(a3);

            accountDropdown.appendChild(button);
            accountDropdown.appendChild(dropdownMenu);
            document.getElementById('usermail').appendChild(accountDropdown);

            //
        } else {

            document.getElementById('signinbutton').innerHTML = '<button type="button" class="btn btn-info my-2 my-sm-0 mr-4" onclick="document.location.href=\'login.html\';">Log In / Sign Up</button>'
            // User is signed out.
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
        }
    }, function (error) {
        console.log(error);
    });
};

window.addEventListener('load', function () {
    initApp();
});