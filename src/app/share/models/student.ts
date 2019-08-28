export class Student {

    /**
     * Id of a Student. null or number
     */
    private id: number;

    /**
     * name of a Student. null or string
     */
    private nom: string;

    /**
     * firstname of a Student
     */
    private prenom: string;

    /**
     * address of a Student. string or null
     */
    private adresse: string;

    /**
     * id of the class of a Student. Default 1
     */
    private idclasse: number = 1;
    /**
     * Set the name of this Student
     * @param nom Name of this Student
     * @return Student to chain invoke methods
     */
    public setNom(nom: string): Student {
        this.nom = nom;
        return this;
    }

    public setId(id: number): Student {
        this.id = id;
        return this;
    }

    /**
     * Set the firstname of this Student
     * @param prenom firstName of this Student
     * @return Student
     */
    public setPrenom(prenom: string): Student {
        this.prenom = prenom;
        return this;
    }

    /**
     * Sets the address of this student
     * @param adresse Address of this Student
     * @return Student
     */
    public setAdresse(adresse: string): Student {
        this.adresse = adresse;
        return this;
    }

    /**
     * Returns the name of this Student
     */
    public getNom(): string {
        return this.nom;
    }

    /**
     * Returns the firstname of this Student
     */
    public getPrenom(): string {
        return this.prenom;
    }

    /**
     * Returns the address of this Student
     * @return string
     */
    public getAdresse(): string {
        return this.adresse;
    }

    /**
     * Returns the id of the class of this Student
     * @return number
     */
    public getClasse(): number {
        return this.idclasse;
    }

    /**
     * Returns the Id of this Student.
     * @return number
     */
    public getId(): number {
        return this.id;
    }
}
