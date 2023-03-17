interface ITellerSetup {
    version: string;
    setup: Function;
}

interface ITellerConnect {
    open: Function;
    destroy: Function;
}

interface IEnrollment {
    accessToken: string;
    enrollment: {
        id: string;
        institution: {
            name: string;
        };
    };
    signatures: [];
    user: {
        id: string;
    };
}
