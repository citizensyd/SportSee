class FormatUserInfos {
    constructor(data, newData) {
        this.data = data;
        this.newData = newData;
    }

    updateUserInfos() {
        const userInfos = this.data[0].userInfos;
        this.newData.userInfos = this.#createUser(userInfos);
    }

    #createUser(firstName) {
        return {
            firstName: firstName.firstName,
        }
    }
}

export default FormatUserInfos;
