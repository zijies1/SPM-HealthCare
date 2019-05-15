# SPM-HealthCare

why typing input will be reset:
```
const logger = (store) => (next) => (action) =>{
  console.log("action fired",action);
  next(action); // you need to fire action after capture the action in the middleware
}
```
