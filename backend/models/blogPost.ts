import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils/db.js";

class BlogPost extends Model {
    public id!: number;
    public author!: string;
    public content!: any;
    public intro!: string;
    public slug!: string;
    public title!: string;
    public created_at!: Date;
}

BlogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        author: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        content: {
            type: DataTypes.JSONB,
            allowNull: false
        },
        intro: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        slug: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        modelName: "BlogPost",
        sequelize,
        tableName: "blog_posts",
        timestamps: false
    }
);

export default BlogPost;
