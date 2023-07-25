import IShooter from "../Interface/IShooter";

export default class Shooter implements IShooter{
    shoot(): void {
        console.log("pan pan pan")
    }
}