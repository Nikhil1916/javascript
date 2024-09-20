let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
        console.log(this);
    //   let _this = this;.
      this.students.forEach(
        st
      );
    }
  };
  
 group.showList.bind(group)();
 function st(student) { console.log(this.title + ': ' + student)}