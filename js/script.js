const addElForm = document.forms.elAddForm;
const elTag = addElForm.elTag;
const elAddBtn = addElForm.elAdd;
const TagSelect = document.querySelector(".selectTag");

let ids = 0;

const createElForm = document.forms.createElForm;
const elText = createElForm.elText;
const elClass = createElForm.elClass;
const elDoneBtn = createElForm.elDone;

const doneElements = document.querySelector(".rtu-elements");
const tags = document.querySelector(".tags");

elAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    elTag.value &&
    ![...TagSelect.options].some((el) => el.label === elTag.value)
  ) {
    const elem = new Option(elTag.value, ids++);
    TagSelect.append(elem);
  } else {
    alert("This tag is already exist");
  }
});

elDoneBtn.addEventListener("click", (e) => {
  if (elText.value && elClass.value) {
    const newObject = document.createElement(
      TagSelect.selectedOptions[0].label.toLowerCase()
    );
    newObject.className = elClass.value;
    newObject.innerText = elText.value;

    doneElements.appendChild(newObject);
  } else {
    console.error("Invalid tag selected:", selectedTag);
  }
});
