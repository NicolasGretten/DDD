import Command from "src/Command/Command";

export default class StarshipCommandBus {
    private commands: Command[] = [];

    // Method to add commands to the command bus
    addCommand(command: Command): void {
        this.commands.push(command);
    }

    // Method to execute all the added commands
    async executeCommands(): Promise<void> {
        for (const command of this.commands) {
            await command.execute();
        }
    }
}