export const useAnswerStore = defineStore('answer', () => {
    const answer = ref({
        userName: '',
        age:0,
        gender:0,
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
        ans5: '',
        ans6: '',
        resultName: '',
    });
    
    const setUserInfo = (userInfo) => {
        answer.value = { ...answer.value, ...userInfo };
    };
    const clearAnswer = () => {
        answer.value = {
            userName: '',
            age:0,
            gender:0,
            ans1: '',
            ans2: '',
            ans3: '',
            ans4: '',
            ans5: '',
            ans6: '',
            resultName: '',
        };
    };

    return {
        answer,
        setUserInfo,
        clearAnswer,
    };
});