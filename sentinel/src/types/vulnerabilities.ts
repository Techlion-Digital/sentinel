interface Vulnerability {
    id: number;
    name: string;
    description: string;
    severity: "low" | "medium" | "high" | "critical";
    status: "approved" | "rejected" | "pending";
    createdAt: Date;
    updatedAt: Date;
}

export type { Vulnerability };