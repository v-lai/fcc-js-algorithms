var Person = function(firstAndLast) {
    let f = firstAndLast.split(' ')[0];
    let l = firstAndLast.split(' ')[1];

    this.setFirstName = function(first){
        f = first;
    };

    this.getFirstName = function(){
        return f;
    };

    this.setLastName = function(last){
        l = last;
    };

    this.getLastName = function(){
        return l;
    };

    this.setFullName = function(firstAndLast){
        this.setFirstName(firstAndLast.split(' ')[0]);
        this.setLastName(firstAndLast.split(' ')[1]);
    };

    this.getFullName = function(){
        return this.getFirstName() + ' ' + this.getLastName();
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();