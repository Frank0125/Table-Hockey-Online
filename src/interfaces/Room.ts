export interface Room {
    roomId: string;
    players: {
        [key: string]: {
            message: string | null;
        };
    };
    vacant: boolean;
}