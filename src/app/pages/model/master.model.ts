export interface IApiResponse {
    message: String,
    result: boolean,
    data: any
}

export interface ICource {
    courseId: number
    courseName: string
    createdDate: string
    totalHours: string
    totalVideos: number
    courseDescription: string
    thumbnailUrl: string
}

export interface ICourceVideos {
    courseVideoId: number
    courseName: String
    courseId: number
    videoTitle: string
    videoId: number
    videoUrl: String
}

export class User {

    userId: number
    userName: string
    emailId: string
    fullName: string
    role: string
    createdDate: Date
    password: string
    projectName: string
    refreshToken: string
    refreshTokenExpiryTime: Date

    constructor() {
        this.userId = 0;
        this.userName = '';
        this.createdDate = new Date();
        this.emailId = '';
        this.fullName = '';
        this.password = '';
        this.role = '';
        this.projectName = '';
        this.refreshToken = '';
        this.refreshTokenExpiryTime = new Date()
    }
}

export class login {

    userName: string
    password: string

    constructor() {
        this.userName = '';
        this.password = '';
    }
}

export class IEnrolment {
    enrollmentId: number
    userId: number
    courseId: number
    enrolledDate: Date
    isCompleted: boolean

    constructor() {
        this.courseId = 0;
        this.enrolledDate = new Date();
        this.enrollmentId = 0;
        this.isCompleted = false;
        this.userId = 0;
    }
}
