import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as iam from "aws-cdk-lib/aws-iam";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import { Construct } from "constructs";

export class ReportsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 bucket for report uploads
    const reportsBucket = new s3.Bucket(this, "ReportsBucket", {
      bucketName: "admf-reports",
      versioned: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      cors: [
        {
          allowedHeaders: ["*"],
          allowedMethods: [s3.HttpMethods.PUT, s3.HttpMethods.GET],
          allowedOrigins: [
            "http://localhost:3000",
            "https://admf.africa",
            "https://www.admf.africa",
          ],
          exposedHeaders: ["ETag"],
          maxAge: 3600,
        },
      ],
      lifecycleRules: [
        {
          // Clean up incomplete multipart uploads after 7 days
          abortIncompleteMultipartUploadAfter: cdk.Duration.days(7),
        },
      ],
    });

    // CloudFront distribution for public downloads
    const distribution = new cloudfront.Distribution(
      this,
      "ReportsDistribution",
      {
        defaultBehavior: {
          origin:
            origins.S3BucketOrigin.withOriginAccessControl(reportsBucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        },
        comment: "ADMF Reports CDN",
      }
    );

    // IAM user for Next.js app to generate presigned URLs
    const appUser = new iam.User(this, "ReportsAppUser", {
      userName: "admf-reports-app",
    });

    reportsBucket.grantReadWrite(appUser);

    const accessKey = new iam.AccessKey(this, "ReportsAppAccessKey", {
      user: appUser,
    });

    // Outputs
    new cdk.CfnOutput(this, "BucketName", {
      value: reportsBucket.bucketName,
      description: "S3 bucket for report uploads",
    });

    new cdk.CfnOutput(this, "DistributionDomainName", {
      value: distribution.distributionDomainName,
      description: "CloudFront domain for report downloads",
    });

    new cdk.CfnOutput(this, "DistributionId", {
      value: distribution.distributionId,
      description: "CloudFront distribution ID",
    });

    new cdk.CfnOutput(this, "AppAccessKeyId", {
      value: accessKey.accessKeyId,
      description: "Access key ID for the Next.js app",
    });

    new cdk.CfnOutput(this, "AppSecretAccessKey", {
      value: accessKey.secretAccessKey.unsafeUnwrap(),
      description: "Secret access key for the Next.js app (save securely!)",
    });
  }
}
