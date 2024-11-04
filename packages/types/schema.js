Object.defineProperty(exports, "__esModule", { value: true });
module.exports.default = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "$ref": "#/definitions/Pipeline"
  },
  "definitions": {
    "Action": {
      "oneOf": [
        {
          "$ref": "#/definitions/AmazonElasticContainerService"
        },
        {
          "$ref": "#/definitions/AmazonS3"
        },
        {
          "$ref": "#/definitions/AWSAppRunnerDeploy"
        },
        {
          "$ref": "#/definitions/AWSAppRunnerDeploy"
        },
        {
          "$ref": "#/definitions/AWSCDKCLI"
        },
        {
          "$ref": "#/definitions/AWSCLI"
        },
        {
          "$ref": "#/definitions/AWSCLI2"
        },
        {
          "$ref": "#/definitions/AWSCodeDeploy"
        },
        {
          "$ref": "#/definitions/AWSCodePipeline"
        },
        {
          "$ref": "#/definitions/AWSElasticBeanstalk"
        },
        {
          "$ref": "#/definitions/AWSElasticBeanstalkMonitoring"
        },
        {
          "$ref": "#/definitions/AWSLambda"
        },
        {
          "$ref": "#/definitions/AWSLambdaDeploy"
        },
        {
          "$ref": "#/definitions/AzureCLI"
        },
        {
          "$ref": "#/definitions/AzureStorage"
        },
        {
          "$ref": "#/definitions/BackblazeB2"
        },
        {
          "$ref": "#/definitions/Blackfire"
        },
        {
          "$ref": "#/definitions/Bugsnag"
        },
        {
          "$ref": "#/definitions/BuildACordovaApp"
        },
        {
          "$ref": "#/definitions/BuildAFastlaneAppiOS"
        },
        {
          "$ref": "#/definitions/BuildApplication"
        },
        {
          "$ref": "#/definitions/BuildAReactNativeApp"
        },
        {
          "$ref": "#/definitions/BuildDockerImage"
        },
        {
          "$ref": "#/definitions/BuildFlutterAppiOS"
        },
        {
          "$ref": "#/definitions/BuildMultiArchImage"
        },
        {
          "$ref": "#/definitions/ClearCache"
        },
        {
          "$ref": "#/definitions/Cloudflare"
        },
        {
          "$ref": "#/definitions/Cloudfront"
        },
        {
          "$ref": "#/definitions/CodeSignAndExportAnIOSApp"
        },
        {
          "$ref": "#/definitions/CompressImages"
        },
        {
          "$ref": "#/definitions/CopyFilesAction"
        },
        {
          "$ref": "#/definitions/CreateNewSandbox"
        },
        {
          "$ref": "#/definitions/Datadog"
        },
        {
          "$ref": "#/definitions/DatadogServiceCheck"
        },
        {
          "$ref": "#/definitions/DeployToAppStoreConnect"
        },
        {
          "$ref": "#/definitions/DigitalOcean"
        },
        {
          "$ref": "#/definitions/DigitalOceanCDN"
        },
        {
          "$ref": "#/definitions/DigitalOceanCLI"
        },
        {
          "$ref": "#/definitions/DigitalOceanSpaces"
        },
        {
          "$ref": "#/definitions/Discord"
        },
        {
          "$ref": "#/definitions/Docker"
        },
        {
          "$ref": "#/definitions/DockerCLI"
        },
        {
          "$ref": "#/definitions/DockerfileLinter"
        },
        {
          "$ref": "#/definitions/DownloadBackblazeB2"
        },
        {
          "$ref": "#/definitions/DownloadFromSandbox"
        },
        {
          "$ref": "#/definitions/DownloadFTP"
        },
        {
          "$ref": "#/definitions/DownloadFTPS"
        },
        {
          "$ref": "#/definitions/DownloadGCS"
        },
        {
          "$ref": "#/definitions/DownloadS3"
        },
        {
          "$ref": "#/definitions/DownloadSFTP"
        },
        {
          "$ref": "#/definitions/EmailNotification"
        },
        {
          "$ref": "#/definitions/ESLint"
        },
        {
          "$ref": "#/definitions/Firebase"
        },
        {
          "$ref": "#/definitions/FTP"
        },
        {
          "$ref": "#/definitions/FTPS"
        },
        {
          "$ref": "#/definitions/GenerateVariables"
        },
        {
          "$ref": "#/definitions/GhostInspector"
        },
        {
          "$ref": "#/definitions/GhostInspectorCLI"
        },
        {
          "$ref": "#/definitions/GitcryptLock"
        },
        {
          "$ref": "#/definitions/GitcryptUnlock"
        },
        {
          "$ref": "#/definitions/GitHubCLI"
        },
        {
          "$ref": "#/definitions/GitHubRelease"
        },
        {
          "$ref": "#/definitions/GitLabCLI"
        },
        {
          "$ref": "#/definitions/GitPush"
        },
        {
          "$ref": "#/definitions/GKEApplyDeployment"
        },
        {
          "$ref": "#/definitions/GKERunHelm"
        },
        {
          "$ref": "#/definitions/GKERunJob"
        },
        {
          "$ref": "#/definitions/GKERunPod"
        },
        {
          "$ref": "#/definitions/GKESetImage"
        },
        {
          "$ref": "#/definitions/GoogleAppEngine"
        },
        {
          "$ref": "#/definitions/GoogleCDN"
        },
        {
          "$ref": "#/definitions/GoogleChat"
        },
        {
          "$ref": "#/definitions/GoogleCloudCLI"
        },
        {
          "$ref": "#/definitions/GoogleCloudRun"
        },
        {
          "$ref": "#/definitions/GoogleCloudStorage"
        },
        {
          "$ref": "#/definitions/GoogleComputeEngine"
        },
        {
          "$ref": "#/definitions/GoogleFunctions"
        },
        {
          "$ref": "#/definitions/GoogleFunctionsDeploy"
        },
        {
          "$ref": "#/definitions/Heroku"
        },
        {
          "$ref": "#/definitions/HerokuCLI"
        },
        {
          "$ref": "#/definitions/Honeybadger"
        },
        {
          "$ref": "#/definitions/HTTPRequest"
        },
        {
          "$ref": "#/definitions/JMeterCLI"
        },
        {
          "$ref": "#/definitions/KubernetesApplyDeployment"
        },
        {
          "$ref": "#/definitions/KubernetesKubectl"
        },
        {
          "$ref": "#/definitions/KubernetesRunHelmCMDs"
        },
        {
          "$ref": "#/definitions/KubernetesRunJob"
        },
        {
          "$ref": "#/definitions/KubernetesRunPod"
        },
        {
          "$ref": "#/definitions/KubernetesSetImage"
        },
        {
          "$ref": "#/definitions/Lighthouse"
        },
        {
          "$ref": "#/definitions/LinkChecker"
        },
        {
          "$ref": "#/definitions/Linux"
        },
        {
          "$ref": "#/definitions/Loggly"
        },
        {
          "$ref": "#/definitions/MacOS"
        },
        {
          "$ref": "#/definitions/MicrosoftAzure"
        },
        {
          "$ref": "#/definitions/MicrosoftTeams"
        },
        {
          "$ref": "#/definitions/Netlify"
        },
        {
          "$ref": "#/definitions/NewRelicCLI"
        },
        {
          "$ref": "#/definitions/OperateSandbox"
        },
        {
          "$ref": "#/definitions/PassArguments"
        },
        {
          "$ref": "#/definitions/PingMonitoring"
        },
        {
          "$ref": "#/definitions/PublishAndroidApp"
        },
        {
          "$ref": "#/definitions/PublishBundleToGooglePlay"
        },
        {
          "$ref": "#/definitions/Pushbullet"
        },
        {
          "$ref": "#/definitions/PushDockerImage"
        },
        {
          "$ref": "#/definitions/Pushover"
        },
        {
          "$ref": "#/definitions/Rackspace"
        },
        {
          "$ref": "#/definitions/Raygun"
        },
        {
          "$ref": "#/definitions/Replace"
        },
        {
          "$ref": "#/definitions/Rollbar"
        },
        {
          "$ref": "#/definitions/Rsync"
        },
        {
          "$ref": "#/definitions/RunDockerContainer"
        },
        {
          "$ref": "#/definitions/Sentry"
        },
        {
          "$ref": "#/definitions/SetVariables"
        },
        {
          "$ref": "#/definitions/SFTP"
        },
        {
          "$ref": "#/definitions/Shopify"
        },
        {
          "$ref": "#/definitions/ShopifyCLI"
        },
        {
          "$ref": "#/definitions/ShopifyThemeKitCLI"
        },
        {
          "$ref": "#/definitions/SignAndroidApp"
        },
        {
          "$ref": "#/definitions/SignBundle"
        },
        {
          "$ref": "#/definitions/SlackNotification"
        },
        {
          "$ref": "#/definitions/Sleep"
        },
        {
          "$ref": "#/definitions/SMSNotification"
        },
        {
          "$ref": "#/definitions/Snyk"
        },
        {
          "$ref": "#/definitions/SplitTests"
        },
        {
          "$ref": "#/definitions/SSHCommand"
        },
        {
          "$ref": "#/definitions/SSHToSandbox"
        },
        {
          "$ref": "#/definitions/SSLVerify"
        },
        {
          "$ref": "#/definitions/StackHawkCLI"
        },
        {
          "$ref": "#/definitions/TCPMonitoring"
        },
        {
          "$ref": "#/definitions/TelegramNotification"
        },
        {
          "$ref": "#/definitions/TerraformCLI"
        },
        {
          "$ref": "#/definitions/TransferToSandbox"
        },
        {
          "$ref": "#/definitions/TriggerPipeline"
        },
        {
          "$ref": "#/definitions/UpCloud"
        },
        {
          "$ref": "#/definitions/VisualTests"
        },
        {
          "$ref": "#/definitions/Vultr"
        },
        {
          "$ref": "#/definitions/WaitForApproval"
        },
        {
          "$ref": "#/definitions/WebDAV"
        },
        {
          "$ref": "#/definitions/WebMonitoring"
        },
        {
          "$ref": "#/definitions/Windows"
        },
        {
          "$ref": "#/definitions/WPCLI"
        },
        {
          "$ref": "#/definitions/Xcode"
        },
        {
          "$ref": "#/definitions/ZIP"
        }
      ]
    },
    "AmazonElasticContainerService": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "AWS_ECS"
          ],
          "description": "The type of the action. Should be set to `AWS_ECS`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "region": {
          "type": "string",
          "description": "The Amazon region."
        },
        "local_path": {
          "type": "string",
          "description": "The path to the JSON file with task definition."
        },
        "cluster": {
          "type": "string",
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "service": {
          "type": "string",
          "description": "The ID of the ECS service."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "region",
        "local_path",
        "cluster",
        "service"
      ],
      "additionalProperties": false
    },
    "AmazonS3": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "AMAZON_S3"
          ],
          "description": "The type of the action. Should be set to `AMAZON_S3`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "bucket_name": {
          "type": "string",
          "description": "The name of the Amazon S3 Bucket."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "acl": {
          "type": "string",
          "description": "Access control lists (ACLs) enable you to manage access to buckets and objects. It defines which AWS accounts or groups are granted access and the type of access."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "expires_date": {
          "type": "string",
          "format": "date-time",
          "description": "Specifies the expiration period for the objects (how long they stay in the cache)."
        },
        "cache_control": {
          "type": "string",
          "description": "Specifies how long objects stay in the cache."
        },
        "skip_content_type_setting": {
          "type": "boolean",
          "description": "When set to `true` all files will have their mime-types set to `application/octet-stream`."
        },
        "reduced_redundancy": {
          "type": "boolean",
          "description": "Set to `true` if you want to use Reduced Redundancy Storage"
        },
        "deploy_tags": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Tag"
          },
          "description": "Defines tags for files categorization as a key value pairs list."
        },
        "deletion_disabled": {
          "type": "boolean",
          "description": "If set to `true`, files are not deleted if changeset indcates that."
        },
        "content_encoding": {
          "type": "string",
          "description": "ContentEncoding that will be set for the deployed files e.g. \"gzip\"."
        }
      },
      "required": [
        "action",
        "type",
        "bucket_name",
        "integration"
      ],
      "additionalProperties": false
    },
    "Ami": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Defines the [AMI ID of the image](https://buddy.works/docs/actions/vm/windows#creating-custom-ami). Ohio- and Stockholm-region images only."
        },
        "password": {
          "type": "string",
          "description": "Administrator password from the given Ami."
        }
      },
      "additionalProperties": false
    },
    "AMI": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Defines the AMI ID of the image. Ohio-region images only. The image must have Rsync installed."
        },
        "user": {
          "type": "string",
          "description": "The name of the user in the custom image."
        },
        "port": {
          "type": "string",
          "description": "The port used for SSH in the custom image."
        }
      },
      "additionalProperties": false
    },
    "APKs": {
      "type": "object",
      "properties": {
        "apk_path": {
          "type": "string"
        },
        "main_expansion_path": {
          "type": "string"
        },
        "patch_expansion_path": {
          "type": "string"
        }
      },
      "required": [
        "apk_path"
      ],
      "additionalProperties": false
    },
    "Asset": {
      "type": "object",
      "properties": {
        "source_path": {
          "type": "string"
        },
        "label": {
          "type": "string"
        }
      },
      "required": [
        "source_path",
        "label"
      ],
      "additionalProperties": false
    },
    "AWSAppRunnerDeploy": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "AWS_APP_RUNNER_DEPLOY"
          ],
          "description": "The type of the action. Should be set to `AWS_APP_RUNNER_DEPLOY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "service": {
          "type": "string",
          "description": "The ID of the App Runner service ARN."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon region. The full list of regions is available [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        }
      },
      "required": [
        "action",
        "type",
        "service",
        "region",
        "integration"
      ],
      "additionalProperties": false
    },
    "AWSCDKCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "AWS_CDK_CLI"
          ],
          "description": "The type of the action. Should be set to `AWS_CDK_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "string",
          "description": "The commands that will be executed."
        },
        "region": {
          "type": "string",
          "description": "The Amazon region."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "string",
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "region",
        "integration"
      ],
      "additionalProperties": false
    },
    "AWSCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "AWS_CLI"
          ],
          "description": "The type of the action. Should be set to `AWS_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "region": {
          "type": "string",
          "description": "The Amazon region."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "region",
        "integration"
      ],
      "additionalProperties": false
    },
    "AWSCLI2": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "AWS_CLI_2"
          ],
          "description": "The type of the action. Should be set to `AWS_CLI_2`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "region": {
          "type": "string",
          "description": "The Amazon region."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "region",
        "integration"
      ],
      "additionalProperties": false
    },
    "AWSCodeDeploy": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "CODE_DEPLOY"
          ],
          "description": "The type of the action. Should be set to `CODE_DEPLOY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "application_name": {
          "type": "string",
          "description": "The name of the application."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon region. The full list of regions is available [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "group_name": {
          "type": "string",
          "description": "The Amazon group name."
        },
        "config_name": {
          "type": "string",
          "description": "The name of the CodeDeploy configuration."
        },
        "description": {
          "type": "string",
          "description": "The comment about the deployment."
        },
        "ignore_application_stop_failures": {
          "type": "boolean",
          "description": "See [here](http://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeploymentInfo.html)."
        },
        "update_outdated_instances_only": {
          "type": "boolean",
          "description": "See [here](http://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeploymentInfo.html)."
        },
        "wait_for_finish_deployment": {
          "type": "boolean",
          "description": "Defines whether to wait for the finish of the deployment in Amazon Code Deploy."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        }
      },
      "required": [
        "action",
        "type",
        "application_name",
        "integration",
        "region",
        "group_name",
        "config_name"
      ],
      "additionalProperties": false
    },
    "AWSCodePipeline": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "CODE_PIPELINE"
          ],
          "description": "The type of the action. Must be set to `CODE_PIPELINE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "code_pipeline_name": {
          "type": "string",
          "description": "The name of the AWS CodePipeline pipeline triggered by the action."
        },
        "region": {
          "type": "string",
          "description": "The Amazon region."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "wait_for_complete": {
          "type": "boolean",
          "description": "If set to `true`, the action will wait for the CodePipeline to finish."
        }
      },
      "required": [
        "action",
        "type",
        "code_pipeline_name",
        "region",
        "integration"
      ],
      "additionalProperties": false
    },
    "AWSElasticBeanstalk": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "ELASTIC_BEANSTALK"
          ],
          "description": "The type of the action. Should be set to `ELASTIC_BEANSTALK`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "application_name": {
          "type": "string",
          "description": "The name of the application."
        },
        "environment": {
          "type": "string",
          "description": "The Amazon environment."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon region. The full list of regions is available [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "version_label": {
          "type": "string",
          "description": "The label of the deployed version."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        }
      },
      "required": [
        "action",
        "type",
        "application_name",
        "environment",
        "integration",
        "region"
      ],
      "additionalProperties": false
    },
    "AWSElasticBeanstalkMonitoring": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "MONITOR"
          ],
          "description": "The type of the action. Should be set to `MONITOR`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "application_name": {
          "type": "string",
          "description": "The name of the application."
        },
        "environment": {
          "type": "string",
          "description": "The Amazon environment."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon region. The full list of regions is available [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "fail_on_yellow": {
          "type": "boolean",
          "description": "Defines whether or not the action should be marked as failed when Amazon returns ‘yellow’ health status."
        },
        "verbose": {
          "type": "boolean",
          "description": "Defines whether or not to show verbose logs."
        }
      },
      "required": [
        "action",
        "type",
        "application_name",
        "environment",
        "integration",
        "region"
      ],
      "additionalProperties": false
    },
    "AWSLambda": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "LAMBDA"
          ],
          "description": "The type of the action. Should be set to `LAMBDA`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "function_name": {
          "type": "string",
          "description": "The name of the Lambda function."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "region": {
          "type": "string",
          "description": "The Amazon region."
        },
        "qualifier": {
          "type": "string",
          "description": "The Lambda function version or the alias name. More info [here](http://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html)."
        },
        "invocation_type": {
          "type": "string",
          "description": "The way in which the Lambda function will be invoked. More info [here](http://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html)."
        },
        "log_type": {
          "type": "string",
          "enum": [
            "TAIL",
            "NONE"
          ],
          "description": "Logging type. Can be one of `TAIL` or `NONE`."
        },
        "client_context": {
          "type": "string",
          "description": "The type of log data produced by the Lambda function. More info [here](http://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html)."
        },
        "payload": {
          "type": "string",
          "description": "The JSON that will be provided as input to the Lambda function. More info [here](http://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html)."
        }
      },
      "required": [
        "action",
        "type",
        "function_name",
        "integration",
        "region"
      ],
      "additionalProperties": false
    },
    "AWSLambdaDeploy": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "AWS_LAMBDA_DEPLOY"
          ],
          "description": "The type of the action. Should be set to `AWS_LAMBDA_DEPLOY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "function_name": {
          "type": "string",
          "description": "The name of the Lambda function."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon region. The full list of regions is available [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        }
      },
      "required": [
        "action",
        "type",
        "function_name",
        "integration",
        "region"
      ],
      "additionalProperties": false
    },
    "AzureCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "AZURE_CLI"
          ],
          "description": "The type of the action. Should be set to `AZURE_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "application_name": {
          "type": "string",
          "description": "The ID of the application."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "application_name",
        "commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "AzureStorage": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "AZURE_STORAGE"
          ],
          "description": "The type of the action. Should be set to `AZURE_STORAGE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "bucket_name": {
          "type": "string",
          "description": "The name of the bucket."
        },
        "integration": {
          "type": "string",
          "description": "The integration."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the  build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "application_name": {
          "type": "string",
          "description": "The name of the application."
        },
        "deletion_disabled": {
          "type": "boolean",
          "description": "If set to `true`, files are not deleted if changeset indcates that."
        },
        "skip_content_type_setting": {
          "type": "boolean",
          "description": "When set to `true`, all files will have their mime-types set to `application/octet-stream`."
        },
        "content_encoding": {
          "type": "string",
          "description": "ContentEncoding that will be set for the deployed files e.g. \"gzip\"."
        }
      },
      "required": [
        "action",
        "type",
        "bucket_name",
        "integration"
      ],
      "additionalProperties": false
    },
    "BackblazeB2": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "BACKBLAZE_B2"
          ],
          "description": "The type of the action. Should be set to `BACKBLAZE_B2`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "bucket_name": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The name of the Backblaze B2 Bucket."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "region": {
          "type": "string",
          "description": "The name of the Backblaze region."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "string",
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "string",
          "description": "The exceptions from the ignore patterns set in deployment_excludes."
        },
        "cache_control": {
          "type": "string",
          "description": "Specifies how long objects stay in the cache."
        },
        "deletion_disabled": {
          "type": "string",
          "description": "If set to `true`, files are not deleted if changeset indcates that."
        },
        "content_encoding": {
          "type": "string",
          "description": "ContentEncoding that will be set for the deployed files e.g. \"gzip\"."
        }
      },
      "required": [
        "action",
        "type",
        "bucket_name",
        "integration",
        "region"
      ],
      "additionalProperties": false
    },
    "Blackfire": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "BLACKFIRE_PYTHON"
          ],
          "description": "The type of the action. Should be set to `BLACKFIRE_PYTHON`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "version": {
          "type": "string",
          "description": "The version of Python."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH`(default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "version",
        "integration"
      ],
      "additionalProperties": false
    },
    "Bugsnag": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "BUGSNAG"
          ],
          "description": "The type of the action. Should be set to `BUGSNAG`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "version": {
          "type": "string",
          "description": "See `appVersion` [here](https://bugsnagbuildapi.docs.apiary.io/#/reference/0/build)."
        },
        "release_stage": {
          "type": "string",
          "description": "See `releaseStage` [here](https://bugsnagbuildapi.docs.apiary.io/#/reference/0/build)."
        },
        "token": {
          "type": "string",
          "description": "See `apiKey` [here](https://bugsnagbuildapi.docs.apiary.io/#/reference/0/build)."
        },
        "revision": {
          "type": "string",
          "description": "See `sourceControl.revision` [here](https://bugsnagbuildapi.docs.apiary.io/#/reference/0/build)."
        },
        "builder_name": {
          "type": "string",
          "description": "See `builderName` [here](https://bugsnagbuildapi.docs.apiary.io/#/reference/0/build)."
        },
        "auto_assign_release": {
          "type": "boolean",
          "description": "See `autoAssignRelease` [here](https://bugsnagbuildapi.docs.apiary.io/#/reference/0/build)."
        }
      },
      "required": [
        "action",
        "type",
        "version",
        "release_stage",
        "token"
      ],
      "additionalProperties": false
    },
    "BuildACordovaApp": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_MAC_FASTLANE"
          ],
          "description": "The type of the action. Must be set to `NATIVE_BUILD_MAC_FASTLANE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "working_directory": {
          "type": "string",
          "description": "The directory in which the pipeline filesystem will be mounted."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "sync_paths": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SyncPath"
          },
          "description": "Define file paths that should be copied before (`PIPELINE_TO_VM`) and after the execution (`VM_TO_PIPELINE`)."
        },
        "pre_start_simulators": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of simulators initiated before the action runs."
        },
        "node_version": {
          "type": "string",
          "description": "The version of Node.js used in the action."
        },
        "certificates": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added to the iOS keychain."
        },
        "provision_profiles": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added as iOS Provisioning Profiles."
        },
        "xcode_version": {
          "type": "string",
          "description": "Defines the Xcode version."
        }
      },
      "required": [
        "action",
        "type",
        "working_directory",
        "commands"
      ],
      "additionalProperties": false
    },
    "BuildAFastlaneAppiOS": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_MAC_FASTLANE"
          ],
          "description": "The type of the action. Must be set to `NATIVE_BUILD_MAC_FASTLANE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "working_directory": {
          "type": "string",
          "description": "The directory in which the pipeline filesystem will be mounted."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "sync_paths": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SyncPath"
          },
          "description": "Define file paths that should be copied before (`PIPELINE_TO_VM`) and after the execution (`VM_TO_PIPELINE`)."
        },
        "pre_start_simulators": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of simulators initiated before the action runs."
        },
        "node_version": {
          "type": "string",
          "description": "The version of Node.js used in the action."
        },
        "certificates": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added to the iOS keychain."
        },
        "provision_profiles": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added as iOS Provisioning Profiles."
        },
        "xcode_version": {
          "type": "string",
          "description": "Defines the Xcode version."
        }
      },
      "required": [
        "action",
        "type",
        "working_directory",
        "commands"
      ],
      "additionalProperties": false
    },
    "BuildApplication": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "BUILD"
          ],
          "description": "The type of the action. Should be set to `BUILD`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "docker_image_name": {
          "type": "string",
          "description": "The name of the Docker image."
        },
        "docker_image_tag": {
          "type": "string",
          "description": "The tag of the Docker image."
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "cached_dirs": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The dependencies & directories to be cached and available to every execution in this pipeline."
        },
        "working_directory": {
          "type": "string",
          "description": "The directory in which the pipeline filesystem will be mounted."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "services": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Service"
          },
          "description": "The containers with the services that will be attached to this environment. Available types: `MYSQL`, `MONGO_DB`, `MARIADB`, `POSTGRE_SQL`, `REDIS`, `MEMCACHED`, `ELASTICSEARCH`."
        },
        "main_service_name": {
          "type": "string",
          "description": "The hostname of the container in which the action is run. The container will be available under this name in the docker network for services defined in the `services` field."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to a private registry."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to a private registry."
        },
        "registry": {
          "type": "string",
          "description": "The url to the Docker registry or GCR. Required for Google GCR."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration. Available values: `NONE`, `DOCKER_HUB`, `AMAZON_ECR`, `GOOGLE_GCR`, `GOOGLE_ARTIFACT_REGISTRY`, `GIT_HUB_CONTAINER_REGISTRY`, `OTHER`."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon S3 region. Required for using the image from the Amazon ECR. The full list of regions is available [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "use_image_from_action": {
          "type": "boolean",
          "description": "If set to `true` the Docker image will be taken from action defined by `docker_build_action_id` or `docker_build_action_name`."
        },
        "docker_build_action_id": {
          "type": "integer",
          "description": "The ID of the action which built the desired Docker image. If set to 0, the image will be taken from previous pipeline action. Can be used instead of `docker_build_action_name`."
        },
        "docker_build_action_name": {
          "type": "string",
          "description": "The name of the action which built the desired Docker image. Can be used instead of `docker_build_action_id`."
        },
        "execute_every_command": {
          "type": "boolean",
          "description": "If set to `true`, all commands will be executed regardless of the result of the previous command."
        },
        "cache_base_image": {
          "type": "boolean",
          "description": "If set to `true`, the cached version of the image is used, instead of being pulled each time."
        },
        "ignore_image_pull_failures": {
          "type": "boolean",
          "description": "If set to `true`, use cached image on timeouts (only for official images)."
        },
        "run_as_user": {
          "type": "string",
          "description": "All build commands are run as the default user defined in the selected Docker image. Can be set to another username (on the condition that this user exists in the selected image)."
        },
        "image_location": {
          "type": "string",
          "description": "The location of the image used by the action. Available values: `PUBLIC_REGISTRY`, `PRIVATE_REGISTRY`, `ACTION`. If the value is other than `ACTION`, it must be provided together with the docker_registry field. If not provided, the system will automatically set it based on other data from the action."
        },
        "docker_registry": {
          "type": "string",
          "description": "The type of registry from which the image used by the action is retrieved. Available values: `NONE`, `DOCKER_HUB`, `AMAZON_ECR`, `GOOGLE_GCR`, `GOOGLE_ARTIFACT_REGISTRY`, `GIT_HUB_CONTAINER_REGISTRY`, `OTHER`. It must be provided together with `image_location`. If not specified, the system will automatically set it based on other data from the action."
        }
      },
      "required": [
        "action",
        "type",
        "docker_image_name",
        "docker_image_tag",
        "execute_commands"
      ],
      "additionalProperties": false
    },
    "BuildAReactNativeApp": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_MAC_REACT"
          ],
          "description": "The type of the action. Must be set to `NATIVE_BUILD_MAC_REACT`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "working_directory": {
          "type": "string",
          "description": "The directory in which the pipeline filesystem will be mounted."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "sync_paths": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SyncPath"
          },
          "description": "Define file paths that should be copied before (`PIPELINE_TO_VM`) and after the execution (`VM_TO_PIPELINE`)."
        },
        "pre_start_simulators": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of simulators initiated before the action runs."
        },
        "node_version": {
          "type": "string",
          "description": "The version of Node.js used in the action."
        },
        "certificates": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added to the iOS keychain."
        },
        "provision_profiles": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added as iOS Provisioning Profiles."
        },
        "xcode_version": {
          "type": "string",
          "description": "Defines the Xcode version."
        }
      },
      "required": [
        "action",
        "type",
        "working_directory",
        "commands"
      ],
      "additionalProperties": false
    },
    "BuildDockerImage": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOCKERFILE"
          ],
          "description": "The type of the action. Should be set to `DOCKERFILE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "dockerfile_path": {
          "type": "string",
          "description": "The path of the desired dockerfile in the repository. Default is `DOCKERFILE`."
        },
        "context_path": {
          "type": "string",
          "description": "The docker build image context path."
        },
        "docker_image_tag": {
          "type": "string",
          "description": "The tag of the Docker image."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server. Required for delivering the Dockerfile to a private registry."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server. Required for delivering the Dockerfile to a private registry."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration. Available values: `NONE`, `DOCKER_HUB`, `AMAZON_ECR`, `GOOGLE_GCR`, `GOOGLE_ARTIFACT_REGISTRY`, `GIT_HUB_CONTAINER_REGISTRY`, `OTHER`."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon S3 region. Required for delivering the Dockerfile to the Amazon ECR. The full list of regions is available [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "registry": {
          "type": "string",
          "description": "The url to GCR. Can be one of gcr.io, us.gcr.io, eu.gcr.io or asia.gcr.io. Required for Google GCR."
        },
        "repository": {
          "type": "string",
          "description": "The location of the Docker repository."
        },
        "build_args": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The arguments used when building the image from the Dockerfile."
        },
        "insecure_registry": {
          "type": "boolean",
          "description": "If set to `true`, ignore SSL errors upon connecting to the Docker registry."
        },
        "do_not_prune_images": {
          "type": "boolean",
          "description": "If set to `true`, dangling images will not be pruned after the build."
        },
        "buildkit": {
          "type": "boolean",
          "description": "The Docker BuildKit will be activated while invoking the `docker build` command. By default, it is set to `true`."
        },
        "secrets": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/DockerBuildSecret"
          },
          "description": "The list of [secrets](https://buddy.works/docs/yaml/yaml-actions/build-docker-image#dockerbuildsecret-schema) to be sent using the `--secret` parameter."
        },
        "provenance": {
          "type": "string",
          "description": "Refers to the `--provenance` switch of the Docker build. Available values: `NONE`, `MIN`, `MAX`. The default value is `NONE`."
        },
        "cache_mode": {
          "type": "string",
          "description": "Available if the cache_scope in the pipeline where this action is located, is set to `WORKSPACE` or `PROJECT`. Defines the Docker cache mode. Available values are `MIN` or `MAX`. By default, it is set to `MIN`."
        },
        "docker_registry": {
          "type": "string",
          "description": "The type of registry you authorize to. Available values: `NONE`, `DOCKER_HUB`, `AMAZON_ECR`, `GOOGLE_GCR`, `GOOGLE_ARTIFACT_REGISTRY`, `GIT_HUB_CONTAINER_REGISTRY`, `OTHER`. It must be provided together with image_location. If not specified, the system will automatically set it based on other data from the action."
        }
      },
      "required": [
        "action",
        "type",
        "dockerfile_path"
      ],
      "additionalProperties": false
    },
    "BuildFlutterAppiOS": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_MAC_FLUTTER"
          ],
          "description": "The type of the action. Must be set to `NATIVE_BUILD_MAC_FLUTTER`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "working_directory": {
          "type": "string",
          "description": "The directory in which the pipeline filesystem will be mounted."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "sync_paths": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SyncPath"
          },
          "description": "Define file paths that should be copied before (`PIPELINE_TO_VM`) and after the execution (`VM_TO_PIPELINE`)."
        },
        "pre_start_simulators": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of simulators initiated before the action runs."
        },
        "node_version": {
          "type": "string",
          "description": "The version of Node.js used in the action."
        },
        "certificates": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added to the iOS keychain."
        },
        "provision_profiles": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added as iOS Provisioning Profiles."
        },
        "xcode_version": {
          "type": "string",
          "description": "Defines the Xcode version."
        }
      },
      "required": [
        "action",
        "type",
        "working_directory",
        "commands"
      ],
      "additionalProperties": false
    },
    "BuildMultiArchImage": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOCKER_BUILD_MULTI_ARCH"
          ],
          "description": "The type of the action. Should be set to `DOCKER_BUILD_MULTI_ARCH`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "dockerfile_path": {
          "type": "string",
          "description": "The path of the desired dockerfile in the repository. Default is `DOCKERFILE`."
        },
        "context_path": {
          "type": "string",
          "description": "The docker build image context path."
        },
        "target_stage": {
          "type": "string",
          "description": "Specifes an intermediate build stage by name as a final stage for the resulting image. Commands after the target stage are skipped."
        },
        "secret_id": {
          "type": "string",
          "description": "The identifier to pass into the `docker build --secret`. This identifier is associated with the `RUN --mount` identifier to use in the Dockerfile."
        },
        "secret_src": {
          "type": "string",
          "description": "Renames the secret file to a specific file in the Dockerfile RUN command to use."
        },
        "build_args": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The arguments used when building the image from the Dockerfile."
        },
        "target_platform": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Specifies the target platform for the build output. You can set multiple target platforms. Default value: `linux/amd64`. Available values: `linux/amd64`, `linux/arm64`, `linux/arm/v7`, `linux/arm/v6`."
        },
        "docker_image_tag": {
          "type": "string",
          "description": "The tag of the Docker image."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server. Required for delivering the Dockerfile to a private registry."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server. Required for delivering the Dockerfile to a private registry."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration. Available values: `NONE`, `DOCKER_HUB`, `AMAZON_ECR`, `GOOGLE_GCR`, `GOOGLE_ARTIFACT_REGISTRY`, `GIT_HUB_CONTAINER_REGISTRY`, `OTHER`."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon S3 region. Required for delivering the Dockerfile to the Amazon ECR. The full list of regions is available [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "registry": {
          "type": "string",
          "description": "The url to GCR. Can be one of gcr.io, us.gcr.io, eu.gcr.io or asia.gcr.io. Required for Google GCR."
        },
        "repository": {
          "type": "string",
          "description": "The location of the Docker repository."
        },
        "cache_mode": {
          "type": "string",
          "description": "Available if the cache_scope in the pipeline where this action is located, is set to `WORKSPACE` or `PROJECT`. Defines the Docker cache mode. Available values are `MIN` or `MAX`. By default, it is set to `MIN`."
        },
        "docker_registry": {
          "type": "string",
          "description": "The type of registry you authorize to. Available values: `NONE`, `DOCKER_HUB`, `AMAZON_ECR`, `GOOGLE_GCR`, `GOOGLE_ARTIFACT_REGISTRY`, `GIT_HUB_CONTAINER_REGISTRY`, `OTHER`. It must be provided together with image_location. If not specified, the system will automatically set it based on other data from the action."
        }
      },
      "required": [
        "action",
        "type",
        "dockerfile_path"
      ],
      "additionalProperties": false
    },
    "ClearCache": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "CLEAR_CACHE"
          ],
          "description": "The type of the action. Must be set to `CLEAR_CACHE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "cache_types": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Defines the cache layer cleared by the action. Available values: `DOCKER`, `FILE_SYSTEM`,  `SERVICES`, `ADDITIONAL`."
        }
      },
      "required": [
        "action",
        "type",
        "cache_types"
      ],
      "additionalProperties": false
    },
    "Cloudflare": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "CLOUDFLARE"
          ],
          "description": "The type of the action. Should be set to `CLOUDFLARE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "zone_id": {
          "type": "string",
          "description": "The ID of the Cloudflare zone."
        },
        "distribution_name": {
          "type": "string",
          "description": "The name of the Cloudflare web distribution."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "base_url": {
          "type": "string",
          "description": "The URL address to the desired site."
        },
        "purge_all": {
          "type": "boolean",
          "description": "Specifies whether or not the whole cache should be removed."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "zone_id",
        "distribution_name",
        "integration"
      ],
      "additionalProperties": false
    },
    "Cloudfront": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "CLOUDFLARE"
          ],
          "description": "The type of the action. Should be set to `CLOUDFLARE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "distribution_id": {
          "type": "string",
          "description": "The ID of the Cloudfront web distribution."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "base_url": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "purge_all": {
          "type": "boolean",
          "description": "Specifies whether or not the whole cache should be removed."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment. Available only if `purge_all` is set to `false`."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "distribution_id",
        "integration"
      ],
      "additionalProperties": false
    },
    "CodeSignAndExportAnIOSApp": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_MAC_SIGN"
          ],
          "description": "The type of the action. Must be set to `NATIVE_BUILD_MAC_SIGN`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "archive_location": {
          "type": "string",
          "description": "The filesystem path of the signed archive file."
        },
        "export_location": {
          "type": "string",
          "description": "Defines the filesystem path to which the signed file is exported."
        },
        "property_list_source": {
          "type": "string",
          "description": "Defines the source of the `property_list` used by the action. Available options: `ACTION`, `GENERATED`,`PIPELINE_VOLUME`."
        },
        "property_list": {
          "type": "string",
          "description": "Filesystem path of the properties file or the list of properties separated by the newline character `\\n`."
        },
        "distribution_method": {
          "type": "string",
          "description": "Defines the distribution method from one of the available: `APP_STORE`, `ENTERPRISE`, `AD_HOC`, `DEVELOPMENT`."
        },
        "certificates": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added to the iOS keychain."
        },
        "provision_profiles": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added as iOS Provisioning Profiles."
        }
      },
      "required": [
        "action",
        "type",
        "archive_location"
      ],
      "additionalProperties": false
    },
    "CompressImages": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "IMAGE_COMPRESSION"
          ],
          "description": "The type of the action. Should be set to `IMAGE_COMPRESSION`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "destination": {
          "type": "string",
          "description": "Output directory for compressed images."
        },
        "level": {
          "type": "string",
          "description": "The level of image compression. Can be set to `1` (low), `2` (medium) or `3` (high)."
        },
        "types": {
          "type": "string",
          "description": "Supported image formats. Available types: `jpg`, `png`, `gif`, `svg`."
        }
      },
      "required": [
        "action",
        "type",
        "local_path",
        "destination",
        "level",
        "types"
      ],
      "additionalProperties": false
    },
    "Cookie": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "value"
      ],
      "additionalProperties": false
    },
    "CopyFilesAction": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "COPY_FILES"
          ],
          "description": "The type of the action. Should be set to `COPY_FILES`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "source_pipeline_id": {
          "type": "integer",
          "description": "The ID of the pipeline from which files will be copied. Not required if both `source_project_name` and `source_pipeline_name` are set instead. If not set, the source pipeline will be the current pipeline."
        },
        "source_project_name": {
          "type": "string",
          "description": "The name of the project containing the pipeline from which files will be copied. Required if `source_pipeline_name` is set. Not valid if `source_pipeline_id` is set."
        },
        "source_pipeline_name": {
          "type": "string",
          "description": "The name of the pipeline from which files will be copied. Required if `source_project_name` is set. Not valid if `source_pipeline_id` is set. If not set, the source pipeline will be the current pipeline."
        },
        "target_project_name": {
          "type": "string",
          "description": "The name of the project containing the pipeline to which files will be copied. Required if `target_pipeline_name` is set."
        },
        "target_pipeline_name": {
          "type": "string",
          "description": "The name of the pipeline to which files will be copied. Required if `target_project_name` is set. If not set, the target pipeline will be the current pipeline."
        },
        "source_path": {
          "type": "string",
          "description": "The path in the source pipeline’s filesystem."
        },
        "target_path": {
          "type": "string",
          "description": "The path in the current pipeline’s filesystem."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "copy_hidden_files": {
          "type": "boolean",
          "description": "When set to `true` the hidden files and folders (the ones with the name beginning with a \".\") are copied."
        }
      },
      "required": [
        "action",
        "type"
      ],
      "additionalProperties": false
    },
    "CreateNewSandbox": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SANDBOX_CREATE_NEW"
          ],
          "description": "The type of the action. Must be set to `SANDBOX_CREATE_NEW`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "sandbox_name": {
          "type": "string",
          "description": "Defines the name of the created sandbox."
        },
        "sandbox_distribution": {
          "type": "string",
          "enum": [
            "ubuntu/focal",
            "debian/buster"
          ],
          "description": "Defines the OS distro of the sandbox. Can be one of `ubuntu/focal` or `debian/buster`."
        },
        "sandbox_playbooks": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SandboxPlaybook"
          },
          "description": "Defines the list of playbooks to install during the sandbox creation."
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of tags applied to the sandbox."
        },
        "ram_limit": {
          "type": "integer",
          "description": "Defines the amount of RAM available to the sandbox. Can be one of `2` or `4`."
        },
        "cpu_limit": {
          "type": "integer",
          "description": "Defines the number of vCPUs of the sandbox. Can be one of `1` or `2`."
        },
        "disk_size_limit": {
          "type": "integer",
          "description": "Defines the sandbox disk size. Expressed in GB. Can be one of `5` or `10`."
        },
        "mappings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Mapping"
          },
          "description": "Defines the port-subdomain mappings that allow to access exposed resources on the sandbox."
        },
        "application_port": {
          "type": "integer",
          "description": "Defines the port used in the mapping."
        },
        "subdomain": {
          "type": "string",
          "description": "Defines the subdomain used in the mapping."
        },
        "basic_auth": {
          "type": "boolean",
          "description": "If set to `true`, it allows you to use basic authorization in mappings"
        },
        "mappings_username": {
          "type": "string",
          "description": "Defines the basic auth username required to access the exposed resources."
        },
        "mappings_password": {
          "type": "string",
          "description": "Defines the basic auth password required to access the exposed resources."
        }
      },
      "required": [
        "action",
        "type",
        "sandbox_name",
        "sandbox_distribution",
        "ram_limit",
        "cpu_limit",
        "disk_size_limit",
        "mappings"
      ],
      "additionalProperties": false
    },
    "Datadog": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DATADOG"
          ],
          "description": "The type of the action. Should be set to `DATADOG`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "alert_type": {
          "type": "string",
          "enum": [
            "SUCCESS",
            "WARNING",
            "ERROR"
          ],
          "description": "The type of the alert. Can be one of `SUCCESS`, `WARNING` or `ERROR`."
        },
        "title": {
          "type": "string",
          "description": "The title of the posted event."
        },
        "content": {
          "type": "string",
          "description": "The content of the posted event."
        },
        "aggregation_key": {
          "type": "string",
          "description": "An arbitrary string to use for aggregation, max length of 100 characters. If you specify a key, all events using that key will be grouped together in the Event Stream."
        },
        "host": {
          "type": "string",
          "description": "The Host name to associate with the event. Any tags associated with the host will also be applied to this event."
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of tags to apply to the event."
        },
        "region": {
          "type": "string",
          "enum": [
            "US1",
            "US3",
            "US5",
            "EU1",
            "AP1",
            "US1_FED"
          ],
          "description": "The Datadog region.  Can be one of `US1`, `US3`, `US5`, `EU1`, `AP1`, `US1_FED`. If not set, the default is `US1`."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "alert_type"
      ],
      "additionalProperties": false
    },
    "DatadogServiceCheck": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DATADOG_STATUS_CHECK"
          ],
          "description": "The type of the action. Should be set to `DATADOG_STATUS_CHECK`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "host_name": {
          "type": "string",
          "description": "The Host name to associate with the event. Any tags associated with the host will also be applied to this event."
        },
        "status": {
          "type": "integer",
          "description": "An integer for the status of the check."
        },
        "check": {
          "type": "string",
          "description": "The text for the message."
        },
        "message": {
          "type": "string",
          "description": "A description of why this status occurred."
        },
        "region": {
          "type": "string",
          "enum": [
            "US1",
            "US3",
            "US5",
            "EU1",
            "AP1",
            "US1_FED"
          ],
          "description": "The Datadog region.  Can be one of `US1`, `US3`, `US5`, `EU1`, `AP1`, `US1_FED`. If not set, the default is `US1`."
        }
      },
      "required": [
        "action",
        "type",
        "integration"
      ],
      "additionalProperties": false
    },
    "DeployToAppStoreConnect": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_MAC_DEPLOY"
          ],
          "description": "The type of the action. Must be set to `NATIVE_BUILD_MAC_DEPLOY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "archive_location": {
          "type": "string",
          "description": "The filesystem path of the signed archive file."
        },
        "validate_before_upload": {
          "type": "string",
          "description": "Defines if the app is submitted to Fastlane pre-check before sending for review."
        },
        "submit_for_review": {
          "type": "boolean",
          "description": "Defines if the app is sent to review."
        },
        "skip_metadata": {
          "type": "boolean",
          "description": "Defines if the app metadata is updated."
        },
        "skip_app_version_update": {
          "type": "boolean",
          "description": "Defines if the app version is increased."
        },
        "skip_screenshots": {
          "type": "boolean",
          "description": "Defines is the app screenshots are updated."
        }
      },
      "required": [
        "action",
        "type",
        "archive_location"
      ],
      "additionalProperties": false
    },
    "DigitalOcean": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DIGITAL_OCEAN"
          ],
          "description": "The type of the action. Should be set to `DIGITAL_OCEAN`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "authentication_mode": {
          "type": "string",
          "enum": [
            "PASS"
          ],
          "description": "The authentication mode for SSH. Should be set to `PASS`."
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "authentication_mode",
        "host",
        "login"
      ],
      "additionalProperties": false
    },
    "DigitalOceanCDN": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GOOGLE_CDN"
          ],
          "description": "The type of the action. Should be set to `GOOGLE_CDN`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "endpoint_id": {
          "type": "string",
          "description": "The ID of the DigitalOcean CDN web distribution."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "distribution_name": {
          "type": "string",
          "description": "The name of the DigitalOcean CDN web distribution."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "purge_all": {
          "type": "boolean",
          "description": "Specifies whether or not the whole cache should be removed."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment. Available only if `purge_all` is set to `false`."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "endpoint_id",
        "integration",
        "distribution_name"
      ],
      "additionalProperties": false
    },
    "DigitalOceanCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOCTL"
          ],
          "description": "The type of the action. Should be set to `DOCTL`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "DigitalOceanSpaces": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DO_SPACES"
          ],
          "description": "The type of the action. Should be set to `DO_SPACES`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "bucket_name": {
          "type": "string",
          "description": "The name of the DigitalOcean Spaces Bucket."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "region": {
          "type": "string",
          "description": "The name of the DigitalOcean Spaces region."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "public_access": {
          "type": "boolean",
          "description": "Makes files accessible through public HTTP."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "cache_control": {
          "type": "string",
          "description": "Specifies how long objects stay in the cache."
        },
        "content_encoding": {
          "type": "string",
          "description": "ContentEncoding that will be set for the deployed files e.g. \"gzip\"."
        }
      },
      "required": [
        "action",
        "type",
        "bucket_name",
        "integration",
        "region"
      ],
      "additionalProperties": false
    },
    "Discord": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DISCORD"
          ],
          "description": "The type of the action. Should be set to `DISCORD`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "notification_url": {
          "type": "string",
          "description": "The URL do the desired Discord [webhook](https://discordapp.com/developers/docs/resources/webhook#execute-webhook)."
        },
        "content": {
          "type": "string",
          "description": "The content of the notification."
        },
        "attachments": {
          "type": "string",
          "description": "The embedded rich content. More info [here](https://discordapp.com/developers/docs/resources/channel#attachment-object-attachment-structure)."
        },
        "file_attachments": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The attached files."
        }
      },
      "required": [
        "action",
        "type",
        "notification_url"
      ],
      "additionalProperties": false
    },
    "Docker": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOCKER"
          ],
          "description": "The type of the action. Should be set to `DOCKER`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        },
        "integration": {
          "type": "string",
          "description": "The integration. Required to authorize in Amazon ECR, Google GCR and Docker Hub."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon region. If the Amazon ECR integration has been selected, provide the region to authorize in. The full list of regions is available [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "registry": {
          "type": "string",
          "description": "Provide if you want to authorize in a private registry or Google GCR. For GCR, it can be one of gcr.io, us.gcr.io, eu.gcr.io or asia.gcr.io."
        },
        "login": {
          "type": "string",
          "description": "The username required to authorize in a private registry."
        },
        "password": {
          "type": "string",
          "description": "The password required to authorize in a private registry."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "execute_every_command": {
          "type": "boolean",
          "description": "If set to `true`, all commands will be executed regardless of the result of the previous command."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands"
      ],
      "additionalProperties": false
    },
    "DockerBuildSecret": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "The identifier to pass into the `docker buildx --secret`. This identifier is associated with the `RUN --mount` identifier to use in the Dockerfile."
        },
        "value": {
          "type": "string",
          "description": "If type=FILE, it is a path to the file in the filesystem. If type=ENV, it is the name of the variable whose value will be passed to the secret."
        },
        "type": {
          "type": "string",
          "description": "The type of the secret. Set `FILE` if you want to use a file from the filesystem. If you want it to be a variable value, choose `ENV`."
        }
      },
      "additionalProperties": false
    },
    "DockerCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_DOCKER_CLI"
          ],
          "description": "The type of the action. Must be set to `NATIVE_BUILD_DOCKER_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "working_directory": {
          "type": "string",
          "description": "The directory in which the pipeline filesystem will be mounted."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "execute_every_command": {
          "type": "boolean",
          "description": "If set to `true` all commands will be executed regardless of the result of the previous command."
        },
        "sync_paths": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SyncPath"
          },
          "description": "Define file paths that should be copied before (`PIPELINE_TO_VM`) and after the execution (`VM_TO_PIPELINE`)."
        },
        "docker_layer_caching": {
          "type": "boolean",
          "description": "Enables or disables Docker layer caching."
        },
        "docker_layer_caching_scope": {
          "type": "boolean",
          "description": "Required if `docker_layer_caching` is set to `true`. Defines the caching scope. Available values: `WORKSPACE`, `PROJECT`, `PIPELINE`, `ACTION`."
        },
        "docker_layer_caching_tag": {
          "type": "string",
          "description": "Defines the name of the tag assigned to the cached layer."
        },
        "vm_from_prev_action": {
          "type": "boolean",
          "description": "Set to `true` if you want the action to use the VM from the previous Docker CLI action."
        },
        "vm_action_name": {
          "type": "string",
          "description": "The name of the action from which the VM is reused (if `vm_from_prev_action` is set to `true`). If not set, the previous one will be used."
        },
        "distribution": {
          "type": "string",
          "description": "Set to `AMI` if you want to use your own ami (default `UBUNTU_20_04`)"
        },
        "ami": {
          "oneOf": [
            {
              "$ref": "#/definitions/Ami"
            }
          ],
          "description": "Set if `distribution` is set to `AMI`."
        }
      },
      "required": [
        "action",
        "type",
        "working_directory",
        "commands"
      ],
      "additionalProperties": false
    },
    "DockerfileLinter": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOCKERFILE_LINTER"
          ],
          "description": "The type of the action. Should be set to `DOCKERFILE_LINTER`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "local_path": {
          "type": "string",
          "description": "The path from which a Dockerfile is chosen."
        },
        "shell_type": {
          "type": "string",
          "description": "Type of shell in which the errors will be detected. Available values: `sh`, `bash`, `dash`, `ksh`"
        },
        "ignore_codes": {
          "type": "string",
          "description": "The errors that will be ignored by linter. You can find the error codes below or use [ShellCheck](https://github.com/koalaman/shellcheck/wiki/Checks)."
        },
        "ignores_path": {
          "type": "string",
          "description": "The path to the yaml file with [ignores](https://github.com/buddy-works/dockerfile-linter#yaml-file-with-ignores)."
        }
      },
      "required": [
        "action",
        "type"
      ],
      "additionalProperties": false
    },
    "DownloadBackblazeB2": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOWNLOAD_BACKBLAZE_B2"
          ],
          "description": "The type of the action. Should be set to `DOWNLOAD_BACKBLAZE_B2`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "bucket_name": {
          "type": "string",
          "description": "The name of the Backblaze B2 Bucket."
        },
        "source_path": {
          "type": "string",
          "description": "The path from which the file will be downloaded."
        },
        "destination_path": {
          "type": "string",
          "description": "The path in which the file will be saved."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "region": {
          "type": "string",
          "description": "The name of the Backblaze region."
        },
        "overwrite": {
          "type": "boolean",
          "description": "Replace files if they already exist."
        },
        "recursive": {
          "type": "boolean",
          "description": "If set to `true`, the whole directory tree is downloaded. Otherwise only the files from the path are downloaded."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be excluded from the upload."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "bucket_name",
        "source_path",
        "destination_path",
        "integration",
        "region"
      ],
      "additionalProperties": false
    },
    "DownloadFromSandbox": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOWNLOAD_FROM_SANDBOX"
          ],
          "description": "The type of the action. Should be set to `DOWNLOAD_FROM_SANDBOX`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "source_path": {
          "type": "string",
          "description": "The path from which the file will be downloaded."
        },
        "destination_path": {
          "type": "string",
          "description": "The path in which the file will be saved."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be excluded from the upload."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "sandbox_references": {
          "type": "string",
          "description": "Defines the sandbox selection method. Available values: `BY_TAGS`, `BY_NAME`, `BY_PROJECT`, `BY_DAYS`, `BY_ID`, `BY_ACTION`."
        },
        "sandbox_id": {
          "type": "string",
          "description": "The ID of the sandbox to which the files are uploaded. Required when `sandbox_references` is set to `BY_ID`."
        },
        "referenced_action_id": {
          "type": "integer",
          "description": "The ID of the action that creates the target sandbox. Required when `sandbox_references` is set to `BY_ACTION`."
        },
        "referenced_sanbox_name": {
          "type": "string",
          "description": "The name of the target sandbox. Required when `sandbox_references` is set to `BY_NAME`."
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of tags applied to the target sandbox. Required when `sandbox_references` is set to `BY_TAGS`."
        },
        "sandbox_project_name": {
          "type": "string",
          "description": "The name of the project with the target sandbox. Required when `sandbox_references` is set to `BY_PROJECT`."
        },
        "days": {
          "type": "integer",
          "description": "The number of days passed since the creation of the target sandbox. One of `1`, `2`, `3`, `7`, `14`, `30`. Required when `sandbox_references` is set to `BY_DAYS`."
        },
        "recursive": {
          "type": "boolean",
          "description": "If set to `true`, the whole directory tree is downloaded. Otherwise only the files from the path are downloaded."
        },
        "overwrite": {
          "type": "boolean",
          "description": "Replace files if they already exist."
        }
      },
      "required": [
        "action",
        "type",
        "sandbox_references"
      ],
      "additionalProperties": false
    },
    "DownloadFTP": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOWNLOAD_FTP"
          ],
          "description": "The type of the action. Should be set to `DOWNLOAD_FTP`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "source_path": {
          "type": "string",
          "description": "The path from which the file will be downloaded."
        },
        "destination_path": {
          "type": "string",
          "description": "The path in which the file will be saved."
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "overwrite": {
          "type": "boolean",
          "description": "Replace files if they already exist."
        },
        "recursive": {
          "type": "boolean",
          "description": "If set to `true`, the whole directory tree is downloaded, otherwise only the files from the path are downloaded."
        },
        "download_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the download."
        },
        "download_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `download_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "source_path",
        "destination_path",
        "host",
        "login",
        "port",
        "password"
      ],
      "additionalProperties": false
    },
    "DownloadFTPS": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOWNLOAD_FTPS"
          ],
          "description": "The type of the action. Should be set to `DOWNLOAD_FTPS`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "source_path": {
          "type": "string",
          "description": "The path from which the file will be downloaded."
        },
        "destination_path": {
          "type": "string",
          "description": "The path in which the file will be saved."
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "overwrite": {
          "type": "boolean",
          "description": "Replace files if they already exist."
        },
        "recursive": {
          "type": "boolean",
          "description": "If set to `true`, the whole directory tree is downloaded, otherwise only the files from the path are downloaded."
        },
        "download_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the download."
        },
        "download_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `download_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "source_path",
        "destination_path",
        "host",
        "login",
        "port",
        "password"
      ],
      "additionalProperties": false
    },
    "DownloadGCS": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOWNLOAD_GCS"
          ],
          "description": "The type of the action. Should be set to `DOWNLOAD_GCS`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "bucket_name": {
          "type": "string",
          "description": "The name of the GCS Bucket."
        },
        "source_path": {
          "type": "string",
          "description": "The path from which the file will be downloaded."
        },
        "destination_path": {
          "type": "string",
          "description": "The path in which the file will be saved."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "application_name": {
          "type": "string",
          "description": "The name of the GCS application."
        },
        "overwrite": {
          "type": "boolean",
          "description": "Replace files if they already exist."
        },
        "recursive": {
          "type": "boolean",
          "description": "If set to `true`, the whole directory tree is downloaded, otherwise only the files from the path are downloaded."
        },
        "download_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the download."
        },
        "download_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `download_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "bucket_name",
        "source_path",
        "destination_path",
        "integration"
      ],
      "additionalProperties": false
    },
    "DownloadS3": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOWNLOAD_S3"
          ],
          "description": "The type of the action. Should be set to `DOWNLOAD_S3`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "bucket_name": {
          "type": "string",
          "description": "The name of the Amazon S3 Bucket."
        },
        "source_path": {
          "type": "string",
          "description": "The path from which the file will be downloaded."
        },
        "destination_path": {
          "type": "string",
          "description": "The path in which the file will be saved."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "overwrite": {
          "type": "boolean",
          "description": "Replace files if they already exist."
        },
        "recursive": {
          "type": "boolean",
          "description": "If set to `true`, the whole directory tree is downloaded, otherwise only the files from the path are downloaded."
        },
        "download_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the download."
        },
        "download_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `download_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "bucket_name",
        "source_path",
        "destination_path",
        "integration"
      ],
      "additionalProperties": false
    },
    "DownloadSFTP": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOWNLOAD_SSH"
          ],
          "description": "The type of the action. Should be set to `DOWNLOAD_SSH`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "source_path": {
          "type": "string",
          "description": "The path from which the file will be downloaded."
        },
        "destination_path": {
          "type": "string",
          "description": "The path in which the file will be saved."
        },
        "authentication_mode": {
          "type": "string",
          "enum": [
            "PASS"
          ],
          "description": "The authentication mode for SSH. Should be set to `PASS`."
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "overwrite": {
          "type": "boolean",
          "description": "Replace files if they already exist."
        },
        "recursive": {
          "type": "boolean",
          "description": "If set to `true`, the whole directory tree is downloaded, otherwise only the files from the path are downloaded."
        },
        "download_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the download."
        },
        "download_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `download_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "source_path",
        "destination_path",
        "authentication_mode",
        "host",
        "login",
        "port",
        "password"
      ],
      "additionalProperties": false
    },
    "EmailNotification": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "EMAIL"
          ],
          "description": "The type of the action. Should be set to `EMAIL`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "recipients": {
          "type": "string",
          "description": "The recipients of the notification: email addresses (one per line). One of `send_to_groups` or `recipients` must be specified."
        },
        "send_to_groups": {
          "type": "string",
          "description": "The list of groups' names to which emails will be sent. One of `send_to_groups` or `recipients` must be specified."
        },
        "content": {
          "type": "string",
          "description": "The content of the notification."
        },
        "title": {
          "type": "string",
          "description": "The title of the notification."
        },
        "send_as_html": {
          "type": "boolean",
          "description": "Defines whether to send the content as HTML."
        },
        "file_attachments": {
          "type": "string",
          "description": "The attached files."
        },
        "from_name": {
          "type": "string",
          "description": "The e-mail sender name."
        }
      },
      "required": [
        "action",
        "type",
        "recipients",
        "send_to_groups",
        "content",
        "title"
      ],
      "additionalProperties": false
    },
    "ESLint": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "ESLINT"
          ],
          "description": "The type of the action. Should be set to `ESLINT`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "version": {
          "type": "string",
          "description": "The version of the NodeJS."
        },
        "style": {
          "type": "string",
          "enum": [
            "airbnb",
            "canonical",
            "canonical/ava",
            "canonical/flowtype",
            "canonical/jest",
            "canonical/lodash",
            "canonical/mocha",
            "canonical/react",
            "eslint",
            "es/2015/server",
            "es/2015/client",
            "facebook",
            "google",
            "standard",
            "xo",
            "xo/esnext",
            "xo/browser",
            "custom"
          ],
          "description": "The name of the code style. Can be one of `airbnb`, `canonical`, `canonical/ava`, `canonical/flowtype`, `canonical/jest`, `canonical/lodash`, `canonical/mocha`, `canonical/react`, `eslint`, `es/2015/server`, `es/2015/client`, `facebook`, `google`, `standard`, `xo`, `xo/esnext`, `xo/browser` or `custom`."
        },
        "config_path": {
          "type": "string",
          "description": "Required if `style` is set to `custom`. Path to the style config file."
        },
        "fix": {
          "type": "boolean",
          "description": "Defines whether to automatically fix code issues or just perform the code analyse."
        },
        "quiet": {
          "type": "boolean",
          "description": "When set to `true`, reports only errors, without warnings."
        }
      },
      "required": [
        "action",
        "type",
        "version",
        "style"
      ],
      "additionalProperties": false
    },
    "Event": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "The type of the event. Available values: 'PUSH', 'CREATE_REF', 'DELETE_REF'."
        },
        "refs": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of refs for which the pipeline will be triggered in the given event."
        },
        "tags": {
          "type": "string",
          "description": "Runs the pipeline on the runner with tag that matches at least one of those specified in the array."
        }
      },
      "required": [
        "type",
        "refs"
      ],
      "additionalProperties": false
    },
    "Firebase": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "FIREBASE"
          ],
          "description": "The type of the action. Should be set to `FIREBASE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "application_id": {
          "type": "string",
          "description": "The ID of the Firebase application."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Commands that will be executed."
        },
        "volume_mappings": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The path preceding the colon is the filesystem path (the folder from the filesystem to be mounted in the container). The path after the colon is the container path (the path in the container, where this filesystem will be located)."
        },
        "working_directory": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "application_id",
        "integration",
        "execute_commands"
      ],
      "additionalProperties": false
    },
    "FTP": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "FTP"
          ],
          "description": "The type of the action. Should be set to `FTP`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "active_mode": {
          "type": "boolean",
          "description": "Enables the active mode for the connection."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "use_temporary_files": {
          "type": "boolean",
          "description": "The files will be uploaded with a \"tmp\" suffix that will be removed once the upload has finished."
        }
      },
      "required": [
        "action",
        "type",
        "host",
        "login",
        "password",
        "port"
      ],
      "additionalProperties": false
    },
    "FTPS": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "FTPS"
          ],
          "description": "The type of the action. Should be set to `FTPS`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "host",
        "login",
        "password",
        "port"
      ],
      "additionalProperties": false
    },
    "GenerateVariables": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "INTEGRATION_VARIABLES"
          ],
          "description": "The type of the action. Must be set to `INTEGRATION_VARIABLES`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "Defines the hash ID of the integration from which the system generates variables. Supported integrations: `AMAZON`, `GIT_HUB_API`, `DOCKER_HUB`, `DIGITAL_OCEAN`."
        }
      },
      "required": [
        "action",
        "type",
        "integration"
      ],
      "additionalProperties": false
    },
    "GhostInspector": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GHOST_INSPECTOR"
          ],
          "description": "The type of the action. Should be set to `GHOST_INSPECTOR`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "user": {
          "type": "string",
          "description": "The name to associate with the event."
        },
        "password": {
          "type": "string",
          "description": "The password to associate with the event."
        },
        "immediate": {
          "type": "boolean",
          "description": "Use to initiate the execution, then immediate return a response (without results)."
        },
        "disable_notifications": {
          "type": "boolean",
          "description": "Use to disable all notifications for this execution only."
        },
        "region": {
          "type": "string",
          "description": "Geo-location for test execution. The following options are available: `us-east-1`, `us-west-1`, `ca-central-1`, `eu-central-1`, `eu-west-1`, `eu-west-2`, `eu-west-3`, `eu-north-1`, `ap-northeast-1`, `ap-northeast-2`, `ap-southeast-1`, `ap-southeast-2`, `ap-south-1`, `sa-east-1`."
        },
        "browser": {
          "type": "string",
          "description": "Alternate browser to use for this execution. The following options are available: `firefox` (default), `firefox-<version>` specific version of Firefox, for example `firefox-57`, `chrome` (paid plans only), `phantomjs`."
        },
        "suite_id": {
          "type": "string",
          "description": "The ID of the suite to execute."
        },
        "folder_id": {
          "type": "string",
          "description": "The ID of the folder to execute."
        },
        "channel": {
          "type": "string",
          "description": "Specify the Slack channel to notify for this suite run. Note that the value must be `myChannel` or `%23myChannel` and not `#myChannel`."
        },
        "viewport": {
          "type": "string",
          "description": "Alternate screen size to use for all tests in this execution only. This should be a string formatted as `{width}x{height}`, for example `1024x768`."
        },
        "data_file": {
          "type": "string",
          "description": "A CSV file containing a row of variable values for each suite run. A POST request must be used when sending this file. When included, an array of suite results will be returned instead of an array of test result."
        },
        "start_url": {
          "type": "string",
          "description": "Alternate start URL to use for all tests in this execution only."
        },
        "user_agent": {
          "type": "string",
          "description": "Alternate user agent to use for all tests in this execution only."
        }
      },
      "required": [
        "action",
        "type",
        "integration"
      ],
      "additionalProperties": false
    },
    "GhostInspectorCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GHOST_INSPECTOR_CLI"
          ],
          "description": "The type of the action. Should be set to `GHOST_INSPECTOR_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "string",
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "string",
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "GitcryptLock": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GIT_CRYPT_LOCK"
          ],
          "description": "The type of the action. Should be set to `GIT_CRYPT_LOCK`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "keys": {
          "type": "string",
          "description": "Key names you want to use to lock your repository."
        },
        "force_arg": {
          "type": "string",
          "description": "Set to `true` if you want to lock even if there is uncommitted work in pipeline filesystem."
        }
      },
      "required": [
        "action",
        "type",
        "keys"
      ],
      "additionalProperties": false
    },
    "GitcryptUnlock": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GIT_CRYPT_UNLOCK"
          ],
          "description": "The type of the action. Should be set to `GIT_CRYPT_UNLOCK`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "keys": {
          "type": "string",
          "description": "Key names you want to use to unlock your repository."
        }
      },
      "required": [
        "action",
        "type",
        "keys"
      ],
      "additionalProperties": false
    },
    "GitHubCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GIT_HUB_CLI"
          ],
          "description": "The type of the action. Must be set to `GIT_HUB_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `BASH` (default) or `SH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "GitHubRelease": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GIT_HUB_RELEASE"
          ],
          "description": "The type of the action. Should be set to `GIT_HUB_RELEASE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "tag_name": {
          "type": "string",
          "description": "The name of the tag."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "organization": {
          "type": "string",
          "description": "The account owner of the repository. The name is not case-sensitive."
        },
        "external_project_id": {
          "type": "string",
          "description": "The name of the repository. The name is not case-sensitive. Created from the field 'organization/repository name.'"
        },
        "target_commitish": {
          "type": "string",
          "description": "Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch."
        },
        "draft": {
          "type": "boolean",
          "description": "Set to `true` to create a draft (unpublished) release or to `false` to create a published one. By default, it's set to `false`."
        },
        "prerelease": {
          "type": "boolean",
          "description": "Set to `true` to identify the release as a prerelease. Set to `false` to identify the release as a full release. By default, it's set to `false`."
        },
        "release_name": {
          "type": "string",
          "description": "The name of the release."
        },
        "body": {
          "type": "string",
          "description": "Text describing the contents of the tag."
        },
        "assets": {
          "oneOf": [
            {
              "$ref": "#/definitions/Asset"
            }
          ],
          "description": "The package of assets for this release. The path has to be provided in the `source_path` field and the label name in the `label` field."
        }
      },
      "required": [
        "action",
        "type",
        "tag_name",
        "integration",
        "organization",
        "external_project_id"
      ],
      "additionalProperties": false
    },
    "GitLabCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GIT_LAB_CLI"
          ],
          "description": "The type of the action. Must be set to `GIT_LAB_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `BASH` (default) or `SH`."
        },
        "setup_commands": {
          "type": "string",
          "description": "The command that will be executed only on the first run."
        },
        "execute_commands": {
          "type": "string",
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "GitPush": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "PUSH"
          ],
          "description": "The type of the action. Should be set to `PUSH`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "push_url": {
          "type": "string",
          "description": "The url to the repository."
        },
        "git_auth_mode": {
          "type": "string",
          "enum": [
            "HTTP"
          ],
          "description": "The authentication mode for GIT. Should be set to `HTTP`."
        },
        "tag": {
          "type": "string",
          "description": "The name of the tag to push."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "push_tags": {
          "type": "boolean",
          "description": "Defines whether the tags should be pushed to the remote repository or  not."
        },
        "use_custom_gitignore": {
          "type": "boolean",
          "description": "When set to `false` the push will ignore paths listed in .gitignore  file."
        },
        "isolated": {
          "type": "boolean",
          "description": "When set to `true`, action will push only repository files (without  artifacts)."
        },
        "target_branch": {
          "type": "string",
          "description": "Defines the remote branch to which the push will be performed. If empty, files will be pushed to the same branch."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the push. Only works  when `use_custom_gitignore` is set to `true`."
        },
        "without_force": {
          "type": "boolean",
          "description": "Defines whether the `--force` flag should be used when invoking  the git push command or not."
        },
        "comment": {
          "type": "string",
          "description": "Optional custom git commit message."
        },
        "custom_options": {
          "type": "string",
          "description": "Use custom git push options."
        }
      },
      "required": [
        "action",
        "type",
        "push_url",
        "git_auth_mode"
      ],
      "additionalProperties": false
    },
    "GKEApplyDeployment": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "KUBERNETES_APPLY"
          ],
          "description": "The type of the action. Should be set to `KUBERNETES_APPLY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "config_path": {
          "type": "string",
          "description": "The path to the configuration file."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the Google integration."
        },
        "gke_auth_type": {
          "type": "string",
          "description": "Authorization type. Set to `SERVICE_ACCOUNT`."
        },
        "zone_id": {
          "type": "string",
          "description": "The ID of the GKE zone."
        },
        "cluster": {
          "type": "string",
          "description": "The ID of the GKE cluster."
        },
        "application_id": {
          "type": "string",
          "description": "The ID of the GKE application."
        },
        "record_arg": {
          "type": "string",
          "enum": [
            "TRUE",
            "FALSE",
            "NOT_SET"
          ],
          "description": "Record current kubectl command in the resource annotation. Can be one of `TRUE`, `FALSE` or `NOT_SET`. If set to false, do not record the command. If set to `true`, record the command. If not set, default to updating the existing annotation value only if one already exists."
        },
        "save_config_arg": {
          "type": "boolean",
          "description": "If `true`, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
        },
        "force_arg": {
          "type": "boolean",
          "description": "Delete and re-create the specified resource, when PATCH encounters conflict and has retried for 5 times."
        },
        "overwrite_arg": {
          "type": "boolean",
          "description": "Automatically resolve conflicts between the modified and live configuration by using values from the modified configuration."
        },
        "cascade_arg": {
          "type": "boolean",
          "description": "Only relevant during a prune or a force apply. If `true`, cascade the deletion of the resources managed by pruned or deleted resources (e.g. Pods created by a ReplicationController)."
        },
        "all_arg": {
          "type": "boolean",
          "description": "Defines whether to select all the specified resources."
        },
        "grace_period_arg": {
          "type": "integer",
          "description": "Only relevant during a prune or a force apply. Period of time in seconds given to pruned or deleted resources to terminate gracefully. Ignored if negative."
        },
        "prune_arg": {
          "type": "boolean",
          "description": "Automatically delete resource objects that do not appear in the configs and are created by either apply or create –save-config. Should be used with either -l or –all."
        },
        "prune_whitelist_arg": {
          "type": "string",
          "description": "Overwrite the default whitelist with <group/version/kind< for –prune."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is <latest<."
        }
      },
      "required": [
        "action",
        "type",
        "config_path",
        "integration",
        "gke_auth_type",
        "zone_id",
        "cluster",
        "application_id"
      ],
      "additionalProperties": false
    },
    "GKERunHelm": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "HELM"
          ],
          "description": "The type of the action. Should be set to `HELM`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "integration_hash": {
          "type": "string",
          "description": "The ID of the Google integration."
        },
        "zone_id": {
          "type": "string",
          "description": "The ID of the GKE zone."
        },
        "cluster": {
          "type": "string",
          "description": "The ID of the GKE cluster."
        },
        "application_id": {
          "type": "string",
          "description": "The ID of the GKE application."
        },
        "helm_version": {
          "type": "string",
          "description": "The Helm version."
        },
        "gke_auth_type": {
          "type": "string",
          "description": "Authorization type. Set to `SERVICE_ACCOUNT`."
        },
        "helm_repository_region": {
          "type": "string",
          "description": "Helm repository region. Set it if Helm repository is on AWS S3."
        },
        "helm_repository_integration": {
          "type": "string",
          "description": "Amazon integration ID. Set it if Helm repository is on AWS S3."
        },
        "helm_repository_key": {
          "type": "string",
          "description": "Service Account Key from Google Cloud Storage. Set it if Helm repository is on GCS."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Allow you to install Helm plugins."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is “latest”."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "integration_hash",
        "zone_id",
        "cluster",
        "application_id",
        "helm_version",
        "gke_auth_type"
      ],
      "additionalProperties": false
    },
    "GKERunJob": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "KUBERNETES_RUN_JOB"
          ],
          "description": "The type of the action. Should be set to `KUBERNETES_RUN_JOB`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the Google integration."
        },
        "gke_auth_type": {
          "type": "string",
          "description": "Authorization type. Set to `SERVICE_ACCOUNT`."
        },
        "zone_id": {
          "type": "string",
          "description": "The ID of the GKE zone."
        },
        "cluster": {
          "type": "string",
          "description": "The ID of the GKE cluster."
        },
        "application_id": {
          "type": "string",
          "description": "The ID of the GKE application."
        },
        "record_arg": {
          "type": "string",
          "enum": [
            "TRUE",
            "FALSE",
            "NOT_SET"
          ],
          "description": "Record current kubectl command in the resource annotation. Can be one of `TRUE`, `FALSE` or `NOT_SET`. If set to false, do not record the command. If set to `true`, record the command. If not set, default to updating the existing annotation value only if one already exists."
        },
        "config_path": {
          "type": "string",
          "description": "The repository path to the configuration file. One of `config_path` or `content` must be specified."
        },
        "leave_after": {
          "type": "boolean",
          "description": "Defines whether to leave the Pod or delete it after the action finishes."
        },
        "content": {
          "type": "string",
          "description": "The configuration content. One of `config_path` or `content` must be specified."
        },
        "not_wait": {
          "type": "boolean",
          "description": "Defines whether the execution should or should not wait for job to end."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is <latest<."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "gke_auth_type",
        "zone_id",
        "cluster",
        "application_id"
      ],
      "additionalProperties": false
    },
    "GKERunPod": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "KUBERNETES_RUN_POD"
          ],
          "description": "The type of the action. Should be set to `KUBERNETES_RUN_POD`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the Google integration."
        },
        "gke_auth_type": {
          "type": "string",
          "description": "Authorization type. Set to `SERVICE_ACCOUNT`."
        },
        "zone_id": {
          "type": "string",
          "description": "The ID of the GKE zone."
        },
        "cluster": {
          "type": "string",
          "description": "The ID of the GKE cluster."
        },
        "application_id": {
          "type": "string",
          "description": "The ID of the GKE application."
        },
        "record_arg": {
          "type": "string",
          "enum": [
            "TRUE",
            "FALSE",
            "NOT_SET"
          ],
          "description": "Record current kubectl command in the resource annotation. Can be one of `TRUE`, `FALSE` or `NOT_SET`. If set to false, do not record the command. If set to `true`, record the command. If not set, default to updating the existing annotation value only if one already exists."
        },
        "config_path": {
          "type": "string",
          "description": "The repository path to the configuration file. One of `config_path` or `content` must be specified."
        },
        "leave_after": {
          "type": "boolean",
          "description": "Defines whether to leave the Pod or delete it after the action finishes."
        },
        "content": {
          "type": "string",
          "description": "The configuration content. One of `config_path` or `content` must be specified."
        },
        "not_wait": {
          "type": "boolean",
          "description": "Defines whether the execution should or should not wait for job to end."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is <latest<."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "gke_auth_type",
        "zone_id",
        "cluster",
        "application_id"
      ],
      "additionalProperties": false
    },
    "GKESetImage": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "KUBERNETES_SET_IMAGE"
          ],
          "description": "The type of the action. Should be set to `KUBERNETES_SET_IMAGE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "container": {
          "type": "string",
          "description": "The name of the container."
        },
        "namespace": {
          "type": "string",
          "description": "The name of the namespace."
        },
        "deployment": {
          "type": "string",
          "description": "The name of the deployment from the namespace."
        },
        "image_name": {
          "type": "string",
          "description": "The name of the image to set."
        },
        "image_tag": {
          "type": "string",
          "description": "The tag of the chosen image."
        },
        "config_path": {
          "type": "string",
          "description": "The path to the configuration file."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the Google integration."
        },
        "gke_auth_type": {
          "type": "string",
          "description": "Authorization type. Set to `SERVICE_ACCOUNT`."
        },
        "zone_id": {
          "type": "string",
          "description": "The ID of the GKE zone."
        },
        "cluster": {
          "type": "string",
          "description": "The ID of the GKE cluster."
        },
        "application_id": {
          "type": "string",
          "description": "The ID of the GKE application."
        },
        "record_arg": {
          "type": "string",
          "enum": [
            "TRUE",
            "FALSE",
            "NOT_SET"
          ],
          "description": "Record current kubectl command in the resource annotation. Can be one of `TRUE`, `FALSE` or `NOT_SET`. If set to false, do not record the command. If set to `true`, record the command. If not set, default to updating the existing annotation value only if one already exists."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is <latest<."
        }
      },
      "required": [
        "action",
        "type",
        "container",
        "namespace",
        "deployment",
        "image_name",
        "image_tag",
        "config_path",
        "integration",
        "gke_auth_type",
        "zone_id",
        "cluster",
        "application_id"
      ],
      "additionalProperties": false
    },
    "GoogleAppEngine": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GOOGLE_APP_DEPLOY"
          ],
          "description": "The type of the action. Should be set to `GOOGLE_APP_DEPLOY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "bucket_name": {
          "type": "string",
          "description": "The name of the GAE Bucket."
        },
        "application_name": {
          "type": "string",
          "description": "The name of the GAE application."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "version_label": {
          "type": "string",
          "description": "The label of the image version."
        },
        "image_url": {
          "type": "string",
          "description": "The URL address to the desired image."
        },
        "promote_all_traffic": {
          "type": "boolean",
          "description": "Specifies whether or not to send all traffic to the new version immediately."
        },
        "stop_previous_version": {
          "type": "boolean",
          "description": "Specifies whether or not to stop previous version instances."
        },
        "verbosity": {
          "type": "string",
          "enum": [
            "critical",
            "debug",
            "err",
            "info",
            "none",
            "warning"
          ],
          "description": "The verbosity level. Default level is `warning`. Can be one of `critical`, `debug`, `error`, `info`, `none` or `warning`."
        },
        "config_path": {
          "type": "string",
          "description": "YAML configuration file."
        }
      },
      "required": [
        "action",
        "type",
        "bucket_name",
        "application_name",
        "integration"
      ],
      "additionalProperties": false
    },
    "GoogleCDN": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GOOGLE_CDN_INVALIDATE"
          ],
          "description": "The type of the action. Should be set to `GOOGLE_CDN_INVALIDATE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "distribution_id": {
          "type": "string",
          "description": "The ID of the Google web distribution."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "url_map": {
          "type": "string",
          "description": "The name of the mapping rules."
        },
        "purge_all": {
          "type": "boolean",
          "description": "Specifies whether or not the whole cache should be removed."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment. Available only if `purge_all` is set to `false`."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "distribution_id",
        "integration"
      ],
      "additionalProperties": false
    },
    "GoogleChat": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GOOGLE_CHAT"
          ],
          "description": "The type of the action. Should be set to `GOOGLE_CHAT`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "content": {
          "type": "string",
          "description": "The content of the notification."
        },
        "channel": {
          "type": "string",
          "description": "The ID of the Google Chat channel."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        }
      },
      "required": [
        "action",
        "type",
        "content",
        "channel",
        "integration"
      ],
      "additionalProperties": false
    },
    "GoogleCloudCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GOOGLE_CLOUD_CLI"
          ],
          "description": "The type of the action. Should be set to `GOOGLE_CLOUD_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the Google integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "application_name": {
          "type": "string",
          "description": "The name of the Google application."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "GoogleCloudRun": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GOOGLE_CLOUD_RUN_DEPLOY"
          ],
          "description": "The type of the action. Should be set to `GOOGLE_CLOUD_RUN_DEPLOY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "service": {
          "type": "string",
          "description": "The name of the service."
        },
        "application_name": {
          "type": "string",
          "description": "The name of the application."
        },
        "application_display_name": {
          "type": "string",
          "description": "The display name of the application."
        },
        "image": {
          "type": "string",
          "description": "The name of the image."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "region": {
          "type": "string",
          "description": "The [region](https://cloud.google.com/compute/docs/regions-zones) in which the resource can be found. Required when platform is set to `MANAGED`."
        },
        "cluster": {
          "type": "string",
          "description": "The ID of the cluster or fully qualified identifier for the cluster. Required when the platform is set to `GKE`."
        },
        "cluster_location": {
          "type": "string",
          "description": "The zone in which the cluster is located. Required when the platform is set to `GKE`."
        },
        "context": {
          "type": "string",
          "description": "The name of the context in your kubectl config file to use for connecting. Required when the platform is set to `KUBERNETES`."
        },
        "config_path": {
          "type": "string",
          "description": "Kubectl configuration file. Required when the platform is set to `KUBERNETES`."
        },
        "platform": {
          "type": "string",
          "description": "Target platform for running commands. Can be set to: `MANAGED`, `GKE` or `KUBERNETES`."
        }
      },
      "required": [
        "action",
        "type",
        "service",
        "application_name",
        "application_display_name",
        "image",
        "integration"
      ],
      "additionalProperties": false
    },
    "GoogleCloudStorage": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GOOGLE_CLOUD_STORAGE"
          ],
          "description": "The type of the action. Should be set to `GOOGLE_CLOUD_STORAGE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "bucket_name": {
          "type": "string",
          "description": "The name of the GCS Bucket."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "public_access": {
          "type": "boolean",
          "description": "Makes files accessible through public HTTP."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "application_name": {
          "type": "string",
          "description": "The name of the GCS application."
        },
        "content_encoding": {
          "type": "string",
          "description": "ContentEncoding that will be set for the deployed files e.g. \"gzip\"."
        }
      },
      "required": [
        "action",
        "type",
        "bucket_name",
        "integration"
      ],
      "additionalProperties": false
    },
    "GoogleComputeEngine": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GCE"
          ],
          "description": "The type of the action. Should be set to `GCE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "authentication_mode": {
          "type": "string",
          "enum": [
            "PASS"
          ],
          "description": "The authentication mode for SSH. Should be set to `PASS`."
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "authentication_mode",
        "host",
        "login",
        "port"
      ],
      "additionalProperties": false
    },
    "GoogleFunctions": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GOOGLE_FUNCTION_INVOKE"
          ],
          "description": "The type of the action. Should be set to `GOOGLE_FUNCTION_INVOKE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "function_name": {
          "type": "string",
          "description": "The name of the Google function."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "application_id": {
          "type": "string",
          "description": "The id of the Google Cloud project."
        },
        "payload": {
          "type": "string",
          "description": "The JSON that will be provided as input to the Google function."
        },
        "region": {
          "type": "string",
          "description": "Region in which function can be found or will be created."
        }
      },
      "required": [
        "action",
        "type",
        "function_name",
        "integration",
        "application_id"
      ],
      "additionalProperties": false
    },
    "GoogleFunctionsDeploy": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "GOOGLE_FUNCTION_DEPLOY"
          ],
          "description": "The type of the action. Should be set to `GOOGLE_FUNCTION_DEPLOY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "function_name": {
          "type": "string",
          "description": "The name of the Google function."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "application_id": {
          "type": "string",
          "description": "The id of the Google Cloud project."
        },
        "region": {
          "type": "string",
          "description": "Region in which function can be found or will be created."
        },
        "runtime": {
          "type": "string",
          "description": "The Cloud Functions execution environment. Options: `nodejs6`, `nodejs8`, `nodejs10`, `nodejs12`, `python37`, `go111`."
        },
        "command_args": {
          "type": "string",
          "description": "Additional arguments sent upon deploying the function."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        }
      },
      "required": [
        "action",
        "type",
        "function_name",
        "integration",
        "application_id"
      ],
      "additionalProperties": false
    },
    "Header": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "value"
      ],
      "additionalProperties": false
    },
    "Heroku": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "HEROKU"
          ],
          "description": "The type of the action. Should be set to `HEROKU`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "application_name": {
          "type": "string",
          "description": "The ID of the application."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "use_custom_gitignore": {
          "type": "boolean",
          "description": "When set to `false` the push will ignore paths listed in .gitignore file."
        },
        "isolated": {
          "type": "boolean",
          "description": "When set to `true`, action will push only repository files (without artifacts)."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the push. Only works when `use_custom_gitignore`is set to `true`."
        },
        "without_force": {
          "type": "boolean",
          "description": "Defines whether the `--force` flag should be used when invoking the git push command or not."
        }
      },
      "required": [
        "action",
        "type",
        "application_name",
        "integration"
      ],
      "additionalProperties": false
    },
    "HerokuCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "HEROKU_CLI"
          ],
          "description": "The type of the action. Should be set to `HEROKU_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "application_name": {
          "type": "string",
          "description": "The ID of the application."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "application_name",
        "commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "Honeybadger": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "HONEYBADGER"
          ],
          "description": "The type of the action. Should be set to `HONEYBADGER`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "environment": {
          "type": "string",
          "description": "The Honeybadger environment."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "token": {
          "type": "string",
          "description": "The Honeybadger token."
        }
      },
      "required": [
        "action",
        "type",
        "environment",
        "integration",
        "token"
      ],
      "additionalProperties": false
    },
    "HTTPRequest": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "HTTP"
          ],
          "description": "The type of the action. Should be set to `HTTP`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "notification_url": {
          "type": "string",
          "description": "The target URL."
        },
        "method_url": {
          "type": "string",
          "description": "The desired HTTP method. Available values are `GET`, `POST`, `PUT`, `PATCH` or `DELETE`."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "content": {
          "type": "string",
          "description": "The content of the request."
        },
        "headers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Header"
          },
          "description": "The headers that will be sent with the request."
        }
      },
      "required": [
        "action",
        "type",
        "notification_url",
        "method_url"
      ],
      "additionalProperties": false
    },
    "JMeterCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "JMETER_CLI"
          ],
          "description": "The type of the action. Should be set to `JMETER_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands"
      ],
      "additionalProperties": false
    },
    "KubernetesApplyDeployment": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "KUBERNETES_APPLY"
          ],
          "description": "The type of the action. Should be set to `KUBERNETES_APPLY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "auth_type": {
          "type": "string",
          "enum": [
            "BASIC",
            "TOKEN",
            "CERTS"
          ],
          "description": "Authorization type. Can be one of `BASIC`, `TOKEN` or `CERTS`."
        },
        "server": {
          "type": "string",
          "description": "The host for the connection."
        },
        "config_path": {
          "type": "string",
          "description": "The path to the configuration file."
        },
        "grace_period_arg": {
          "type": "integer",
          "description": "Only relevant during a prune or a force apply. Period of time in seconds given to pruned or deleted resources to terminate gracefully. Ignored if negative."
        },
        "login": {
          "type": "string",
          "description": "The username required when `auth_type` is set to `BASIC`."
        },
        "password": {
          "type": "string",
          "description": "The password required when `auth_type` is set to `BASIC`."
        },
        "token": {
          "type": "string",
          "description": "The token required when `auth_type` is set to `TOKEN`."
        },
        "client_ca": {
          "type": "string",
          "description": "The certificate authority required when `auth_type` is set to `CERTS`."
        },
        "client_cert": {
          "type": "string",
          "description": "The client certificate required when `auth_type` is set to `CERTS`."
        },
        "client_key": {
          "type": "string",
          "description": "The client key required when `auth_type` is set to `CERTS`."
        },
        "record_arg": {
          "type": "string",
          "enum": [
            "TRUE",
            "FALSE",
            "NOT_SET"
          ],
          "description": "Record current kubectl command in the resource annotation. Can be one of `TRUE`, `FALSE` or `NOT_SET`. If set to false, do not record the command. If set to `TRUE`, record the command. If not set, default to updating the existing annotation value only if one already exists."
        },
        "force_arg": {
          "type": "boolean",
          "description": "Delete and re-create the specified resource, when PATCH encounters conflict and has retried for 5 times."
        },
        "overwrite_arg": {
          "type": "boolean",
          "description": "Automatically resolve conflicts between the modified and live configuration by using values from the modified configuration."
        },
        "cascade_arg": {
          "type": "boolean",
          "description": "Only relevant during a prune or a force apply. If `true`, cascade the deletion of the resources managed by pruned or deleted resources (e.g. Pods created by a ReplicationController)."
        },
        "all_arg": {
          "type": "boolean",
          "description": "Defines whether to select all the specified resources."
        },
        "prune_arg": {
          "type": "boolean",
          "description": "Automatically delete resource objects that do not appear in the configs and are created by either apply or create –save-config. Should be used with either -l or –all."
        },
        "prune_whitelist_arg": {
          "type": "string",
          "description": "Overwrite the default whitelist with <group/version/kind> for –prune."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is <latest>."
        }
      },
      "required": [
        "action",
        "type",
        "auth_type",
        "server",
        "config_path",
        "grace_period_arg"
      ],
      "additionalProperties": false
    },
    "KubernetesKubectl": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "KUBERNETES_CLI"
          ],
          "description": "The type of the action. Should be set to `KUBERNETES_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "auth_type": {
          "type": "string",
          "enum": [
            "BASIC",
            "TOKEN",
            "CERTS"
          ],
          "description": "Authorization type. Can be one of `BASIC`, `TOKEN` or `CERTS`."
        },
        "server": {
          "type": "string",
          "description": "The host for the connection."
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "login": {
          "type": "string",
          "description": "The username required when `auth_type` is set to `BASIC`."
        },
        "password": {
          "type": "string",
          "description": "The password required when `auth_type` is set to `BASIC`."
        },
        "token": {
          "type": "string",
          "description": "The token required when `auth_type` is set to `TOKEN`."
        },
        "client_ca": {
          "type": "string",
          "description": "The certificate authority required when `auth_type` is set to `CERTS`."
        },
        "client_cert": {
          "type": "string",
          "description": "The client certificate required when `auth_type` is set to `CERTS`."
        },
        "client_key": {
          "type": "string",
          "description": "The client key required when `auth_type` is set to `CERTS`."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is “latest”."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        }
      },
      "required": [
        "action",
        "type",
        "auth_type",
        "server",
        "execute_commands"
      ],
      "additionalProperties": false
    },
    "KubernetesRunHelmCMDs": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "HELM"
          ],
          "description": "The type of the action. Should be set to `HELM`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "auth_type": {
          "type": "string",
          "enum": [
            "BASIC",
            "TOKEN",
            "CERTS"
          ],
          "description": "Authorization type. Can be one of `BASIC`, `TOKEN` or `CERTS`."
        },
        "server": {
          "type": "string",
          "description": "The host for the connection."
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "helm_version": {
          "type": "string",
          "description": "The Helm version."
        },
        "helm_repository_region": {
          "type": "string",
          "description": "Helm repository region. Set it if Helm repository is on AWS S3."
        },
        "helm_integration": {
          "type": "string",
          "description": "Amazon or Google integration ID. Set it if Helm repository is on AWS S3 or Google Cloud Storage."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Allow you to install Helm plugins."
        },
        "login": {
          "type": "string",
          "description": "The username required when `auth_type` is set to `BASIC`."
        },
        "password": {
          "type": "string",
          "description": "The password required when `auth_type` is set to `BASIC`."
        },
        "token": {
          "type": "string",
          "description": "The token required when `auth_type` is set to `TOKEN`."
        },
        "client_ca": {
          "type": "string",
          "description": "The certificate authority required when `auth_type` is set to `CERTS`."
        },
        "client_cert": {
          "type": "string",
          "description": "The client certificate required when `auth_type` is set to `CERTS`."
        },
        "client_key": {
          "type": "string",
          "description": "The client key required when `auth_type` is set to `CERTS`."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is “latest”."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        }
      },
      "required": [
        "action",
        "type",
        "auth_type",
        "server",
        "execute_commands",
        "helm_version"
      ],
      "additionalProperties": false
    },
    "KubernetesRunJob": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "KUBERNETES_RUN_JOB"
          ],
          "description": "The type of the action. Should be set to `KUBERNETES_RUN_JOB`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "auth_type": {
          "type": "string",
          "enum": [
            "BASIC",
            "TOKEN",
            "CERTS"
          ],
          "description": "Authorization type. Can be one of `BASIC`, `TOKEN` or `CERTS`."
        },
        "server": {
          "type": "string",
          "description": "The host for the connection."
        },
        "save_config_arg": {
          "type": "boolean",
          "description": "If `true`, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
        },
        "login": {
          "type": "string",
          "description": "The username required when `auth_type` is set to `BASIC`."
        },
        "password": {
          "type": "string",
          "description": "The password required when `auth_type` is set to `BASIC`."
        },
        "token": {
          "type": "string",
          "description": "The token required when `auth_type` is set to `TOKEN`."
        },
        "client_ca": {
          "type": "string",
          "description": "The certificate authority required when `auth_type` is set to `CERTS`."
        },
        "client_cert": {
          "type": "string",
          "description": "The client certificate required when `auth_type` is set to `CERTS`."
        },
        "client_key": {
          "type": "string",
          "description": "The client key required when `auth_type` is set to `CERTS`."
        },
        "record_arg": {
          "type": "string",
          "enum": [
            "TRUE",
            "FALSE",
            "NOT_SET"
          ],
          "description": "Record current kubectl command in the resource annotation. Can be one of `TRUE`, `FALSE` or `NOT_SET`. If set to `FALSE`, do not record the command. If set to `TRUE`, record the command. If not set, default to updating the existing annotation value only if one already exists."
        },
        "leave_after": {
          "type": "boolean",
          "description": "Defines whether to leave the Pod or delete it after the action finishes."
        },
        "config_path": {
          "type": "string",
          "description": "The repository path to the configuration file. One of `config_path` or `content` must be specified."
        },
        "content": {
          "type": "string",
          "description": "The configuration content. One of `config_path` or `content` must be specified."
        },
        "not_wait": {
          "type": "boolean",
          "description": "Defines whether the execution should or should not wait for job to end."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is “latest”."
        }
      },
      "required": [
        "action",
        "type",
        "auth_type",
        "server"
      ],
      "additionalProperties": false
    },
    "KubernetesRunPod": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "KUBERNETES_RUN_POD"
          ],
          "description": "The type of the action. Should be set to `KUBERNETES_RUN_POD`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "auth_type": {
          "type": "string",
          "enum": [
            "BASIC",
            "TOKEN",
            "CERTS"
          ],
          "description": "Authorization type. Can be one of `BASIC`, `TOKEN` or `CERTS`."
        },
        "server": {
          "type": "string",
          "description": "The host for the connection."
        },
        "save_config_arg": {
          "type": "boolean",
          "description": "If `true`, the configuration of current object will be saved in its annotation. Otherwise, the annotation will be unchanged. This flag is useful when you want to perform kubectl apply on this object in the future."
        },
        "login": {
          "type": "string",
          "description": "The username required when `auth_type` is set to `BASIC`."
        },
        "password": {
          "type": "string",
          "description": "The password required when `auth_type` is set to `BASIC`."
        },
        "token": {
          "type": "string",
          "description": "The token required when `auth_type` is set to `TOKEN`."
        },
        "client_ca": {
          "type": "string",
          "description": "The certificate authority required when `auth_type` is set to `CERTS`."
        },
        "client_cert": {
          "type": "string",
          "description": "The client certificate required when `auth_type` is set to `CERTS`."
        },
        "client_key": {
          "type": "string",
          "description": "The client key required when `auth_type` is set to `CERTS`."
        },
        "record_arg": {
          "type": "string",
          "enum": [
            "TRUE",
            "FALSE",
            "NOT_SET"
          ],
          "description": "Record current kubectl command in the resource annotation. Can be one of `TRUE`, `FALSE` or `NOT_SET`. If set to `FALSE`, do not record the command. If set to `TRUE`, record the command. If not set, default to updating the existing annotation value only if one already exists."
        },
        "leave_after": {
          "type": "boolean",
          "description": "Defines whether to leave the Pod or delete it after the action finishes."
        },
        "config_path": {
          "type": "string",
          "description": "The repository path to the configuration file. One of `config_path` or `content` must be specified."
        },
        "content": {
          "type": "string",
          "description": "The configuration content. One of `config_path` or `content` must be specified."
        },
        "not_wait": {
          "type": "boolean",
          "description": "Defines whether the execution should or should not wait for job to end."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is “latest”."
        }
      },
      "required": [
        "action",
        "type",
        "auth_type",
        "server"
      ],
      "additionalProperties": false
    },
    "KubernetesSetImage": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "KUBERNETES_SET_IMAGE"
          ],
          "description": "The type of the action. Should be set to `KUBERNETES_SET_IMAGE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "container": {
          "type": "string",
          "description": "The name of the container."
        },
        "namespace": {
          "type": "string",
          "description": "The name of the namespace."
        },
        "deployment": {
          "type": "string",
          "description": "The name of the deployment from the namespace."
        },
        "image_name": {
          "type": "string",
          "description": "The name of the image to set."
        },
        "image_tag": {
          "type": "string",
          "description": "The tag of the chosen image."
        },
        "record_arg": {
          "type": "string",
          "enum": [
            "TRUE",
            "FALSE",
            "NOT_SET"
          ],
          "description": "Record current kubectl command in the resource annotation. Can be one of `TRUE`, `FALSE` or `NOT_SET`. If set to false, do not record the command. If set to `TRUE`, record the command. If not set, default to updating the existing annotation value only if one already exists."
        },
        "kubectl_version": {
          "type": "string",
          "description": "Version of the kubectl used in the action. Default is “latest”."
        }
      },
      "required": [
        "action",
        "type",
        "container",
        "namespace",
        "deployment",
        "image_name",
        "image_tag"
      ],
      "additionalProperties": false
    },
    "Lighthouse": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "LIGHTHOUSE"
          ],
          "description": "The type of the action. Should be set to `LIGHTHOUSE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "website": {
          "type": "string",
          "description": "The address of the site on which the audit should run."
        },
        "device": {
          "type": "string",
          "enum": [
            "mobile",
            "desktop"
          ],
          "description": "The device on which the audit will be run. Can be one of `mobile`, `desktop` and `mobileDesktop`."
        },
        "performance": {
          "type": "integer",
          "description": "Values from 0 to 100 are accepted. The action returns an error if the score is below the values that are set."
        },
        "accessibility": {
          "type": "integer",
          "description": "Values from 0 to 100 are accepted. The action returns an error if the score is below the values that are set."
        },
        "best_practices": {
          "type": "integer",
          "description": "Values from 0 to 100 are accepted. The action returns an error if the score is below the values that are set."
        },
        "seo": {
          "type": "integer",
          "description": "Values from 0 to 100 are accepted. The action returns an error if the score is below the values that are set."
        }
      },
      "required": [
        "action",
        "type",
        "website",
        "device",
        "performance",
        "accessibility",
        "best_practices",
        "seo"
      ],
      "additionalProperties": false
    },
    "LinkChecker": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "LINK_CHECKER"
          ],
          "description": "The type of the action. Should be set to `LINK_CHECKER`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "scan_url": {
          "type": "string",
          "description": "The address of the site to be checked by the validator."
        },
        "ba_username": {
          "type": "string",
          "description": "The basic auth username value."
        },
        "ba_password": {
          "type": "string",
          "description": "The basic auth password value."
        },
        "html_form_auth_username": {
          "type": "string",
          "description": "The HTML form username value."
        },
        "html_form_auth_password": {
          "type": "string",
          "description": "The HTML form password value."
        },
        "html_form_auth_username_input_name": {
          "type": "string",
          "description": "The name attribute of the username input element."
        },
        "html_form_auth_password_input_name": {
          "type": "string",
          "description": "The name attribute of the password input element."
        },
        "html_form_auth_url": {
          "type": "string",
          "description": "The URL of a login page to be visited before link checking. The page is expected to contain an HTML form to collect credentials and submit them to the address in its action attribute using an HTTP POST request."
        },
        "depth": {
          "type": "integer",
          "description": "Check recursively all links up to the given depth. A negative depth will enable infinite recursion. The default depth is infinite."
        },
        "cookies": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Cookie"
          },
          "description": "Set the cookie name/value. Can be given more than once."
        },
        "connection_timeout": {
          "type": "integer",
          "description": "Set the timeout for connection attempts in seconds. The default timeout is 60 seconds."
        },
        "respect_robot_exclusions": {
          "type": "boolean",
          "description": "When using HTTP, fetch robots.txt, and confirm whether each URL should be accessed before checking. The default is to use robots.txt files."
        },
        "check_ssl_certificate": {
          "type": "boolean",
          "description": "If set to zero, it disables the SSL certificate checking. If set to one, it enables the SSL certificate checking with the provided CA certificate file. If a filename is specified, it will be used as the certificate file."
        },
        "internal_links": {
          "type": "string",
          "description": "The regular expression to add more URLs recognized as internal links. The default is that URLs given on the command line are internal."
        },
        "check_external_links": {
          "type": "boolean",
          "description": "Check external links. The default is to check internal links only."
        },
        "ignore_urls": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Only check the syntax of URLs matching the given regular expressions."
        },
        "no_follow_urls": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Check but do not recurse into URLs matching the given regular expressions."
        },
        "warning_regex": {
          "type": "string",
          "description": "Only check syntax of URLs matching the given regular expressions."
        },
        "user_agent": {
          "type": "string",
          "description": "Specify the User-Agent string to send to the HTTP server, for example `Mozilla/4.0`. The default is `LinkChecker/X.Y` where X.Y is the current version of LinkChecker."
        },
        "threads": {
          "type": "integer",
          "description": "Generate no more than the given number of threads. The default number of threads is 10. To disable threading specify a non-positive number."
        },
        "requests_per_host": {
          "type": "integer",
          "description": "Limit the maximum number of HTTP requests per second to one host. The average number of requests per second is approximately one third of the maximum. Values less than 1 and at least 0.001 can be used. To use values greater than 10, the HTTP server must return a “LinkChecker” response header. The default is 10."
        }
      },
      "required": [
        "action",
        "type",
        "scan_url"
      ],
      "additionalProperties": false
    },
    "Linux": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_LINUX"
          ],
          "description": "The type of the action. Must be set to `NATIVE_BUILD_LINUX`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "working_directory": {
          "type": "string",
          "description": "The directory in which the pipeline filesystem will be mounted."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "distribution": {
          "type": "string",
          "description": "Defines the image used to create the VM. Use `UBUNTU_20_04` for the default image, `AMI` for a custom AMI."
        },
        "execute_every_command": {
          "type": "boolean",
          "description": "If set to `true` all commands will be executed regardless of the result of the previous command."
        },
        "sync_paths": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SyncPath"
          },
          "description": "Define file paths that should be copied before (`PIPELINE_TO_VM`) and after the execution (`VM_TO_PIPELINE`)."
        },
        "vm_from_prev_action": {
          "type": "boolean",
          "description": "Set to `true` if you want the action to use the VM from the previous Linux action."
        },
        "vm_action_name": {
          "type": "string",
          "description": "The name of the action from which the VM is reused (if `vm_from_prev_action` is set to `true`). If not set, the previous one will be used."
        },
        "ami": {
          "oneOf": [
            {
              "$ref": "#/definitions/Ami"
            }
          ],
          "description": "Set if `distribution` is set to `AMI`."
        }
      },
      "required": [
        "action",
        "type",
        "working_directory",
        "commands",
        "distribution"
      ],
      "additionalProperties": false
    },
    "Loggly": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "LOGGLY"
          ],
          "description": "The type of the action. Should be set to `LOGGLY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of Loggly tags used for segmentation and filtering."
        },
        "content": {
          "type": "string",
          "description": "The content of the notification."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "tags"
      ],
      "additionalProperties": false
    },
    "MacOS": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_MAC"
          ],
          "description": "The type of the action. Must be set to `NATIVE_BUILD_MAC`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "working_directory": {
          "type": "string",
          "description": "The directory in which the pipeline filesystem will be mounted."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "sync_paths": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SyncPath"
          },
          "description": "Define file paths that should be copied before (`PIPELINE_TO_VM`) and after the execution (`VM_TO_PIPELINE`)."
        },
        "pre_start_simulators": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of simulators initiated before the action runs."
        },
        "certificates": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added to the MacOS keychain."
        },
        "provision_profiles": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of variables added as MacOS Provisioning Profiles."
        },
        "xcode_version": {
          "type": "string",
          "description": "Defines the Xcode version."
        }
      },
      "required": [
        "action",
        "type",
        "working_directory",
        "commands"
      ],
      "additionalProperties": false
    },
    "Mapping": {
      "type": "object",
      "properties": {
        "application_port": {
          "type": "integer"
        },
        "subdomain": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "password": {
          "type": "string"
        }
      },
      "required": [
        "application_port",
        "subdomain"
      ],
      "additionalProperties": false
    },
    "MicrosoftAzure": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "AZURE"
          ],
          "description": "The type of the action. Should be set to `AZURE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "push_url": {
          "type": "string",
          "description": "The URL to the repository."
        },
        "git_auth_mode": {
          "type": "string",
          "description": "The authentication mode for Git Push. Should always be set to `HTTP` ."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "use_custom_gitignore": {
          "type": "boolean",
          "description": "When set to `false` the push will ignore paths listed in .gitignore file."
        },
        "isolated": {
          "type": "boolean",
          "description": "When set to `true`, action will push only repository files (without artifacts)."
        },
        "target_branch": {
          "type": "string",
          "description": "Defines the remote branch to which the push will be performed. If empty, files will be pushed to the same branch."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the push. Only works when `use_custom_gitignore` is set to `true`."
        },
        "without_force": {
          "type": "boolean",
          "description": "Defines whether the `--force` flag should be used when invoking the git push command or not."
        }
      },
      "required": [
        "action",
        "type",
        "push_url",
        "git_auth_mode"
      ],
      "additionalProperties": false
    },
    "MicrosoftTeams": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "MICROSOFT_TEAMS"
          ],
          "description": "The type of the action. Should be set to `MICROSOFT_TEAMS`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "title": {
          "type": "string",
          "description": "The title of the notification."
        },
        "content": {
          "type": "string",
          "description": "The content of the notification."
        },
        "recipients": {
          "type": "string",
          "description": "The recipient of the notification: email address."
        },
        "file_attachments": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The attached files."
        },
        "send_as_html": {
          "type": "boolean",
          "description": "Defines whether to send the content as HTML."
        }
      },
      "required": [
        "action",
        "type",
        "title",
        "content",
        "recipients"
      ],
      "additionalProperties": false
    },
    "Netlify": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NETLIFY"
          ],
          "description": "The type of the action. Should be set to `NETLIFY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Commands that will be executed."
        },
        "site_id": {
          "type": "string",
          "description": "The API ID in the site details."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "execute_commands"
      ],
      "additionalProperties": false
    },
    "NewRelicCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NEW_RELIC_CLI"
          ],
          "description": "The type of the action. Should be set to `NEW_RELIC_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Commands that will be executed."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "execute_commands"
      ],
      "additionalProperties": false
    },
    "OperateSandbox": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SANDBOX_START"
          ],
          "description": "The type of the action. Must be set to `SANDBOX_START`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "sandbox_references": {
          "type": "string",
          "description": "Defines the sandbox selection method. Available values: `BY_TAGS`, `BY_NAME`, `BY_PROJECT`, `BY_DAYS`, `BY_ID`, `BY_ACTION`."
        },
        "sandbox_id": {
          "type": "string",
          "description": "ID of the sandbox to which the files are uploaded. Required when `sandbox_references` is set to `BY_ID`."
        },
        "referenced_action_id": {
          "type": "integer",
          "description": "ID of the action that creates the target sandbox.Required when `sandbox_references` is set to `BY_ACTION`."
        },
        "referenced_sanbox_name": {
          "type": "string",
          "description": "Name of the target sandbox. Required when `sandbox_references` is set to `BY_NAME`."
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "List of tags applied to the target sandbox. Required when `sandbox_references` is set to `BY_TAGS`."
        },
        "sandbox_project_name": {
          "type": "string",
          "description": "Name of the project with the target sandbox. Required when `sandbox_references` is set to `BY_PROJECT`."
        },
        "days": {
          "type": "integer",
          "description": "Number of days passed since the creation of the target sandbox. One of `1`, `2`, `3`, `7`, `14`, `30`. Required when `sandbox_references` is set to `BY_DAYS`."
        }
      },
      "required": [
        "action",
        "type",
        "sandbox_references"
      ],
      "additionalProperties": false
    },
    "PassArguments": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "WAIT_FOR_VARIABLES"
          ],
          "description": "The type of the action. Should be set to `WAIT_FOR_VARIABLES`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "The list of variables to set as parameters for the pipeline. At least one parameter is required."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "key": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "defaults": {
          "type": "string",
          "description": "The value of the parameter."
        },
        "encrypted": {
          "type": "boolean",
          "description": "Encrypted values will not be visible once saved. Can be used for things like passwords."
        },
        "init_path": {
          "type": "string",
          "description": "Path to the file with options."
        },
        "comment": {
          "type": "string",
          "description": "The custom comment that will be displayed upon passing arguments."
        },
        "permissions": {
          "oneOf": [
            {
              "$ref": "#/definitions/Permission"
            }
          ],
          "description": "Define to set permissions for the action."
        }
      },
      "required": [
        "action",
        "type",
        "variables",
        "key"
      ],
      "additionalProperties": false
    },
    "Permission": {
      "type": "object",
      "properties": {
        "others": {
          "type": "string",
          "enum": [
            "DENIED",
            "DEFAULT",
            "READ_ONLY",
            "RUN_ONLY",
            "READ_WRITE"
          ],
          "default": "DEFAULT",
          "description": "AccessLevel for the group Others. Can be one of 'DENIED', 'DEFAULT', 'READ_ONLY', 'RUN_ONLY', or 'READ_WRITE'. Default setting is 'DEFAULT' (Project role).\n\n@default \"DEFAULT\""
        },
        "users": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          },
          "description": "The list of users who will be granted a permission other than the Others group."
        },
        "groups": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          },
          "description": "The group who will be granted a permission other than the Others group."
        }
      },
      "additionalProperties": false
    },
    "PingMonitoring": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "PING"
          ],
          "description": "The type of the action. Should be set to `PING`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "destination": {
          "type": "string",
          "description": "The target URL."
        }
      },
      "required": [
        "action",
        "type",
        "destination"
      ],
      "additionalProperties": false
    },
    "Pipeline": {
      "type": "object",
      "properties": {
        "pipeline": {
          "type": "string",
          "description": "The ID of the pipeline."
        },
        "on": {
          "type": "string",
          "enum": [
            "CLICK",
            "EVENT",
            "SCHEDULE"
          ],
          "default": "EVENT",
          "description": "The trigger mode of the pipeline. Can be one of `CLICK`, `EVENT`, `SCHEDULE`. If not set, the default value is `EVENT`\n\n@default \"EVENT\""
        },
        "refs": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Set it if `on` is set to `CLICK` or `SCHEDULE`. The list of refs for which the pipeline will be triggered. Automatically set to `NONE` if not provided."
        },
        "events": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Event"
          },
          "description": "[The list of events](https://buddy.works/docs/yaml/yaml-schema#event-schema) for which the pipeline will be triggered. Set it if 'on' is set to `EVENT`. Required if `ON` is set or not set to `EVENT`."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the pipeline can be triggered."
        },
        "always_from_scratch": {
          "type": "boolean",
          "description": "Defines whether or not to upload everything from scratch on every execution."
        },
        "auto_clear_cache": {
          "type": "boolean",
          "description": "Defines whether or not to automatically clear cache before running the pipeline ."
        },
        "no_skip_to_most_recent": {
          "type": "boolean",
          "description": "Defines whether or not to skip execution to the most recent execution."
        },
        "do_not_create_commit_status": {
          "type": "boolean",
          "description": "Defines whether or not to omit sending commit statuses to Github or Gitlab upon execution."
        },
        "start_date": {
          "type": "string",
          "format": "date-time",
          "description": "Required if the pipeline is set to `on: SCHEDULE` and no `cron` is specified. Defines when the pipeline execution should start. Format: 2016-11-18T12:38:16.000Z"
        },
        "delay": {
          "type": "integer",
          "description": "Required if the pipeline is set to `on: SCHEDULE` and no `cron` is specified. Defines the intervals in which the pipeline should be executed (in minutes)."
        },
        "cron": {
          "type": "string",
          "description": "Required if the pipeline is set to `on: SCHEDULE` and neither `start_date` nor `delay` is specified. The standard CRON expression defining the execution schedule."
        },
        "actions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Action"
          },
          "description": "The list of actions executed in the pipeline."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use in the pipeline."
        },
        "ignore_fail_on_project_status": {
          "type": "boolean",
          "description": "If set to `true` the status of a given pipeline will not impact the project status on the dashboard."
        },
        "execution_message_template": {
          "type": "string",
          "description": "The title of every execution in this pipeline. By default it is set to `$BUDDY_EXECUTION_REVISION_SUBJECT`."
        },
        "target_site_url": {
          "type": "string",
          "description": "The URL of the target website."
        },
        "disabled": {
          "type": "boolean",
          "description": "Set it, if you want the pipeline to be disabled."
        },
        "disabled_reason": {
          "type": "string",
          "description": "Specify the reason for disabling the pipeline."
        },
        "fetch_all_refs": {
          "type": "boolean",
          "description": "When the pipeline is run, Buddy fetches only one Git reference to the pipeline filesystem (branch, tag, or pull request). If the option is set to `true`, Buddy will be forced to fetch all Git references."
        },
        "permissions": {
          "oneOf": [
            {
              "$ref": "#/definitions/Permission"
            }
          ],
          "description": "Define to set permissions for the pipeline."
        },
        "git_changeset_base": {
          "type": "string",
          "description": "Defines the way the changeset for deployments and trigger conditions between subsequent executions in the pipeline will be calculated. Available values: `LATEST_RUN`, `LATEST_RUN_MATCHING_REF`, `PULL_REQUEST`. By default, it is set to `LATEST_RUN`."
        },
        "cache_scope": {
          "type": "string",
          "description": "Docker cache scope. Available values: `WORKSPACE`, `PROJECT`, `PIPELINE`. By default, it is set to `PIPELINE`."
        },
        "description_required": {
          "type": "boolean",
          "description": "The default value is `false`. If set to `true` and the user does not provide a description when starting a pipeline, the pipeline won't run."
        },
        "pause_on_repeated_failures": {
          "type": "integer",
          "description": "Pauses the pipeline after `n` failed pipeline runs. Restricted to pipelines set to 'on: SCHEDULE'. Possible values: 1-100 (the default value is 100)."
        },
        "filesystem_changeset_base": {
          "type": "string",
          "description": "Defines changeset calculation method whenever deployment action has `input_type` set to `BUILD_ARTIFACTS`. Default set to `DATE_MODIFIED`. Possible values: `DATE_MODIFIED`, `CONTENTS`"
        }
      },
      "required": [
        "pipeline"
      ],
      "additionalProperties": false
    },
    "PipelinePermission": {
      "type": "object",
      "properties": {
        "others": {
          "type": "string",
          "enum": [
            "DENIED",
            "ALLOWED"
          ],
          "default": "ALLOWED",
          "description": "AccessLevel for the group Others. Can be one of `DENIED`, `ALLOWED`. Default setting is `ALLOWED`.\n\n@default \"ALLOWED\""
        },
        "users": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          },
          "description": "The list of users who will be granted a permission other than the Others group."
        },
        "groups": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          },
          "description": "The group who will be granted a permission other than the Others group."
        }
      },
      "additionalProperties": false
    },
    "PublishAndroidApp": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "ANDROID_PUBLISH_APK"
          ],
          "description": "The type of the action. Should be set to `ANDROID_PUBLISH_APK`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "application_id": {
          "type": "string",
          "description": "The ID of the Android Application."
        },
        "track": {
          "type": "string",
          "enum": [
            "production",
            "alpha",
            "beta",
            "rollout",
            "internal",
            "custom"
          ],
          "description": "The track type to read or modify. Can be one of `production`, `alpha`, `beta`, `rollout`, `internal` or custom track as configured in Google Play Console."
        },
        "apk_files": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/APKs"
          },
          "description": "The list of sets of paths to the APKs."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "draft": {
          "type": "boolean",
          "description": "Set to `true` to publish as a draft."
        },
        "user_fraction": {
          "type": "number",
          "description": "Portion of the users who should get the staged rollout version of the APK (range 0.0 - 1.0). Required if `track` is set to `rollout`."
        },
        "mapping_path": {
          "type": "string",
          "description": "The path to the deobfuscated file of the specified APK."
        },
        "changes_path": {
          "type": "string",
          "description": "The path to the changelog file."
        },
        "supersede_versions": {
          "type": "boolean",
          "description": "Check and disable superseded versions in other tracks (if any)."
        }
      },
      "required": [
        "action",
        "type",
        "application_id",
        "track",
        "apk_files",
        "integration"
      ],
      "additionalProperties": false
    },
    "PublishBundleToGooglePlay": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "ANDROID_PUBLISH_APP_BUNDLE"
          ],
          "description": "The type of the action. Should be set to `ANDROID_PUBLISH_APP_BUNDLE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "application_id": {
          "type": "string",
          "description": "The ID of the Android Application."
        },
        "track": {
          "type": "string",
          "enum": [
            "production",
            "alpha",
            "beta",
            "rollout",
            "internal",
            "custom"
          ],
          "description": "The track type to read or modify. Can be one of `production`, `alpha`, `beta`, `rollout`, `internal` or custom track as configured in Google Play Console."
        },
        "apk_files": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/APKs"
          },
          "description": "The list of sets of paths to the APKs."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "draft": {
          "type": "boolean",
          "description": "Set to `true` to publish as a draft."
        },
        "user_fraction": {
          "type": "number",
          "description": "Portion of the users who should get the staged rollout version of the APK (range 0.0 - 1.0). Required if `track` is set to `rollout`."
        },
        "changes_path": {
          "type": "string",
          "description": "The path to the changelog file."
        },
        "supersede_versions": {
          "type": "boolean",
          "description": "Check and disable superseded versions in other tracks (if any)."
        }
      },
      "required": [
        "action",
        "type",
        "application_id",
        "track",
        "apk_files",
        "integration"
      ],
      "additionalProperties": false
    },
    "Pushbullet": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "PUSHBULLET"
          ],
          "description": "The type of the action. Should be set to `PUSHBULLET`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "content": {
          "type": "string",
          "description": "The content of the notification."
        },
        "device": {
          "type": "string",
          "description": "The name of the device to which the notification will be sent."
        },
        "link": {
          "type": "string",
          "description": "The link of the notification."
        },
        "title": {
          "type": "string",
          "description": "The title of the notification."
        }
      },
      "required": [
        "action",
        "type",
        "integration"
      ],
      "additionalProperties": false
    },
    "PushDockerImage": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DOCKER_PUSH"
          ],
          "description": "The type of the action. Should be set to `DOCKER_PUSH`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "docker_image_tag": {
          "type": "string",
          "description": "The tag of the Docker image."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server. Required for delivering the Dockerfile to a private registry."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server. Required for delivering the Dockerfile to a private registry."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration. Available values: `NONE`, `DOCKER_HUB`, `AMAZON_ECR`, `GOOGLE_GCR`, `GOOGLE_ARTIFACT_REGISTRY`, `GIT_HUB_CONTAINER_REGISTRY`, `OTHER`."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon region. Required for delivering the Dockerfile to the Amazon ECR. The full list of regions is available [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "registry": {
          "type": "string",
          "description": "The url to the GCR. Can be one of gcr.io, us.gcr.io , eu.gcr.io or asia.gcr.io. Required for Google GCR."
        },
        "repository": {
          "type": "string",
          "description": "The location of the Docker repository."
        },
        "docker_build_action_id": {
          "type": "integer",
          "description": "The ID of the action which built the desired Docker image. If set to 0, the image will be taken from previous pipeline action. Can be used instead of `docker_build_action_name`."
        },
        "docker_build_action_name": {
          "type": "string",
          "description": "The name of the action which built the desired Docker image. Can be used instead of `docker_build_action_id`."
        },
        "docker_registry": {
          "type": "string",
          "description": "The type of registry you authorize to. Available values: `NONE`, `DOCKER_HUB`, `AMAZON_ECR`, `GOOGLE_GCR`, `GOOGLE_ARTIFACT_REGISTRY`, `GIT_HUB_CONTAINER_REGISTRY`, `OTHER`. It must be provided together with image_location. If not specified, the system will automatically set it based on other data from the action."
        }
      },
      "required": [
        "action",
        "type"
      ],
      "additionalProperties": false
    },
    "Pushover": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "PUSHOVER"
          ],
          "description": "The type of the action. Should be set to `PUSHOVER`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "content": {
          "type": "string",
          "description": "The content of the notification."
        },
        "device": {
          "type": "string",
          "description": "The name of the device to whick notification will be sent."
        },
        "priority": {
          "type": "string",
          "enum": [
            "LOW",
            "NORMAL",
            "HIGH"
          ],
          "description": "Specifies the priority of the notification. Can be one of `LOW`, `NORMAL` or `HIGH`."
        },
        "link": {
          "type": "string",
          "description": "The link of the notification."
        },
        "link_title": {
          "type": "string",
          "description": "The title of the notification link."
        },
        "title": {
          "type": "string",
          "description": "The title of the notification."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "content"
      ],
      "additionalProperties": false
    },
    "Rackspace": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "RACKSPACE"
          ],
          "description": "The type of the action. Should be set to `RACKSPACE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "container": {
          "type": "string",
          "description": "The name of the Rackspace container."
        },
        "region": {
          "type": "string",
          "description": "The name of the Rackspace region."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "content_encoding": {
          "type": "string",
          "description": "ContentEncoding that will be set for the deployed files e.g. \"gzip\"."
        }
      },
      "required": [
        "action",
        "type",
        "container",
        "region",
        "integration"
      ],
      "additionalProperties": false
    },
    "Raygun": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "RAYGUN"
          ],
          "description": "The type of the action. Should be set to `RAYGUN`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "token": {
          "type": "string",
          "description": "See `authToken` [here](https://raygun.com/documentation/product-guides/deployment-tracking/deployments-api/)."
        },
        "device": {
          "type": "string",
          "description": "See `apiKey` [here](https://raygun.com/documentation/product-guides/deployment-tracking/deployments-api/)."
        },
        "version": {
          "type": "string",
          "description": "See `version` [here](https://raygun.com/documentation/product-guides/deployment-tracking/deployments-api/)."
        },
        "user": {
          "type": "string",
          "description": "See `ownerName` [here](https://raygun.com/documentation/product-guides/deployment-tracking/deployments-api/)."
        },
        "email": {
          "type": "string",
          "description": "See `emailAddress` [here](https://raygun.com/documentation/product-guides/deployment-tracking/deployments-api/)."
        },
        "comment": {
          "type": "string",
          "description": "See `comment` [here](https://raygun.com/documentation/product-guides/deployment-tracking/deployments-api/)."
        }
      },
      "required": [
        "action",
        "type",
        "token",
        "device"
      ],
      "additionalProperties": false
    },
    "Replace": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "REPLACE"
          ],
          "description": "The type of the action. Should be set to `REPLACE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "replacements": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Replacement"
          },
          "description": "The list of pairs of strings for replacement."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the filesystem."
        }
      },
      "required": [
        "action",
        "type",
        "replacements"
      ],
      "additionalProperties": false
    },
    "Replacement": {
      "type": "object",
      "properties": {
        "replace_from": {
          "type": "string"
        },
        "replace_to": {
          "type": "string"
        }
      },
      "required": [
        "replace_from",
        "replace_to"
      ],
      "additionalProperties": false
    },
    "Rollbar": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "ROLLBAR"
          ],
          "description": "The type of the action. Should be set to `ROLLBAR`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "token": {
          "type": "string",
          "description": "The post_server_item-scope project access token."
        },
        "application_id": {
          "type": "integer",
          "description": "The ID of the Rollbar application."
        },
        "environment": {
          "type": "string",
          "description": "The name of the environment being deployed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "user": {
          "type": "string",
          "description": "The local Username who deployed."
        },
        "token_name": {
          "type": "string",
          "description": "The name of the project access token."
        },
        "rollbar_username": {
          "type": "string",
          "description": "The Rollbar username of the user who deployed."
        },
        "comment": {
          "type": "string",
          "description": "The additional text data to record with this deploy."
        }
      },
      "required": [
        "action",
        "type",
        "token",
        "application_id",
        "environment",
        "integration",
        "user"
      ],
      "additionalProperties": false
    },
    "Rsync": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "RSYNC"
          ],
          "description": "The type of the action. Should be set to `RSYNC`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "authentication_mode": {
          "type": "string",
          "enum": [
            "PASS"
          ],
          "description": "The authentication mode for SSH. Should be set to `PASS`."
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "delete_extra_files": {
          "type": "boolean",
          "description": "An equivalent for `rsync --delete` option. See [here](https://ss64.com/bash/rsync_options.html)."
        },
        "archive": {
          "type": "boolean",
          "description": "An equivalent for `rsync -a` option. See [here](https://linux.die.net/man/1/rsync)."
        },
        "compress": {
          "type": "boolean",
          "description": "An equivalent for `rsync -z` option. See [here](https://linux.die.net/man/1/rsync)."
        },
        "recursive": {
          "type": "boolean",
          "description": "An equivalent for `rsync -r` option. See [here](https://linux.die.net/man/1/rsync)."
        },
        "dirs": {
          "type": "boolean",
          "description": "An equivalent for `rsync -d` option. See [here](https://linux.die.net/man/1/rsync)."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "authentication_mode",
        "host",
        "login",
        "port"
      ],
      "additionalProperties": false
    },
    "RunDockerContainer": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "RUN_DOCKER_CONTAINER"
          ],
          "description": "The type of the action. Should be set to `RUN_DOCKER_CONTAINER`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "docker_image_name": {
          "type": "string",
          "description": "The name of the Docker image."
        },
        "docker_image_tag": {
          "type": "string",
          "description": "The tag of the Docker image."
        },
        "inline_commands": {
          "type": "string",
          "description": "The commands that will be executed."
        },
        "mount_filesystem_disable": {
          "type": "boolean",
          "description": "Defines whether or not to mount the filesystem to the running container."
        },
        "volume_mappings": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The path preceding the colon is the filesystem path (the folder from the filesystem to be mounted in the container). The path after the colon is the container path (the path in the container, where this filesystem will be located)."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to a private registry."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to a private registry."
        },
        "registry": {
          "type": "string",
          "description": "The url to the Docker registry or GCR. Required for Google GCR."
        },
        "export_container_path": {
          "type": "string",
          "description": "Defines the export path of the container’s filesystem as a tar archive."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration. Required for using the image from the Amazon ECR, Google GCR or Docker Hub."
        },
        "region": {
          "type": "string",
          "description": "The name of the Amazon S3 region. Required for using the image from the Amazon ECR. The full list of regions is available [here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions)."
        },
        "use_image_from_action": {
          "type": "boolean",
          "description": "If set to `true` the Docker image will be taken from action defined by `docker_build_action_id`."
        },
        "run_as_user": {
          "type": "string",
          "description": "All build commands are run as the default user defined in the selected Docker image. Can be set to another username (on the condition that this user exists in the selected image)."
        },
        "docker_build_action_id": {
          "type": "integer",
          "description": "The ID of the action which built the desired Docker image. If set to 0, the image will be taken from previous pipeline action. Can be used instead of `docker_build_action_name`."
        },
        "docker_build_action_name": {
          "type": "string",
          "description": "The name of the action which built the desired Docker image. Can be used instead of `docker_build_action_id`."
        },
        "entrypoint": {
          "type": "string",
          "description": "Default command to execute at runtime. Overwrites the default entrypoint set by the image."
        },
        "image_location": {
          "type": "string",
          "description": "The location of the image used by the action. Available values: `PUBLIC_REGISTRY`, `PRIVATE_REGISTRY`, `ACTION`. If the value is other than `ACTION`, it must be provided together with the docker_registry field. If not provided, the system will automatically set it based on other data from the action."
        },
        "docker_registry": {
          "type": "string",
          "description": "The type of registry from which the image used by the action is retrieved. Available values: `NONE`, `DOCKER_HUB`, `AMAZON_ECR`, `GOOGLE_GCR`, `GOOGLE_ARTIFACT_REGISTRY`, `OTHER`. It must be provided together with image_location. If not specified, the system will automatically set it based on other data from the action."
        }
      },
      "required": [
        "action",
        "type",
        "docker_image_name",
        "docker_image_tag",
        "inline_commands"
      ],
      "additionalProperties": false
    },
    "SandboxPlaybook": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": true
    },
    "Screenshot": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string"
        },
        "baseline": {
          "type": "string"
        },
        "headers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Header"
          }
        },
        "excluded_area": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "url": {
                "type": "string"
              },
              "min_x": {
                "type": "number"
              },
              "min_y": {
                "type": "number"
              },
              "max_x": {
                "type": "number"
              },
              "max_y": {
                "type": "number"
              }
            },
            "required": [
              "url",
              "min_x",
              "min_y",
              "max_x",
              "max_y"
            ],
            "additionalProperties": false
          }
        }
      },
      "required": [
        "url",
        "baseline",
        "headers",
        "excluded_area"
      ],
      "additionalProperties": false
    },
    "Sentry": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SENTRY"
          ],
          "description": "The type of the action. Should be set to `SENTRY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "organization_slug": {
          "type": "string",
          "description": "The slug of the organization the release belongs to."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "version": {
          "type": "string",
          "description": "The version identifier of the release."
        },
        "environment": {
          "type": "string",
          "description": "The environment you’re deploying to."
        },
        "deploy_url": {
          "type": "string",
          "description": "The optional url that points to the deploy."
        },
        "release_url": {
          "type": "string",
          "description": "An optional commit reference."
        },
        "projects": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The list of project slugs that are involved in this release."
        },
        "repository": {
          "type": "string",
          "description": "If Sentry is integrated with repository provider, you can enter the project slug here. You can use the `$BUDDY_REPO_SLUG` variable as well."
        }
      },
      "required": [
        "action",
        "type",
        "organization_slug",
        "integration",
        "version",
        "environment",
        "projects"
      ],
      "additionalProperties": false
    },
    "Service": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "MYSQL",
            "MONGO_DB",
            "MARIADB",
            "POSTGRE_SQL",
            "REDIS",
            "MEMCACHED",
            "ELASTICSEARCH",
            "CUSTOM"
          ]
        },
        "version": {
          "type": "string"
        },
        "connection": {}
      },
      "required": [
        "type"
      ]
    },
    "SetVariables": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SET_VARIABLES"
          ],
          "description": "The type of the action. Should be set to `SET_VARIABLES`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "The list of existing settable variables."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "key": {
          "type": "string",
          "description": "The name of the variable."
        },
        "defaults": {
          "type": "string",
          "description": "The value of the variable."
        },
        "encrypted": {
          "type": "boolean",
          "description": "Encrypted values will not be visible once saved. Can be used for things like passwords."
        },
        "init_path": {
          "type": "string",
          "description": "Path to the file with options."
        },
        "comment": {
          "type": "string",
          "description": "The custom comment that will be displayed upon passing arguments."
        },
        "permissions": {
          "oneOf": [
            {
              "$ref": "#/definitions/Permission"
            }
          ],
          "description": "Define to set permissions for the action."
        }
      },
      "required": [
        "action",
        "type",
        "variables",
        "key"
      ],
      "additionalProperties": false
    },
    "SFTP": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SFTP"
          ],
          "description": "The type of the action. Should be set to `SFTP`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "authentication_mode": {
          "type": "string",
          "enum": [
            "PASS"
          ],
          "description": "The authentication mode for SSH. Should be set to `PASS`."
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "use_temporary_files": {
          "type": "boolean",
          "description": "The files will be uploaded with a \"tmp\" suffix that will be removed once the upload has finished."
        }
      },
      "required": [
        "action",
        "type",
        "authentication_mode",
        "host",
        "login",
        "port"
      ],
      "additionalProperties": false
    },
    "Shopify": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SHOPIFY"
          ],
          "description": "The type of the action. Should be set to `SHOPIFY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "theme_name": {
          "type": "string",
          "description": "The name of the Shopify theme."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        }
      },
      "required": [
        "action",
        "type",
        "theme_name",
        "integration"
      ],
      "additionalProperties": false
    },
    "ShopifyCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SHOPIFY_CLI"
          ],
          "description": "The type of the action. Should be set to `SHOPIFY_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "ShopifyThemeKitCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SHOPIFY_THEMEKIT_CLI"
          ],
          "description": "The type of the action. Should be set to `SHOPIFY_THEMEKIT_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "SignAndroidApp": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "ANDROID_SIGN"
          ],
          "description": "The type of the action. Should be set to `ANDROID_SIGN`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "local_path": {
          "type": "string",
          "description": "The path to the generated .apk file."
        },
        "application_name": {
          "type": "string",
          "description": "The name of the signed APK file."
        },
        "key_path": {
          "type": "string",
          "description": "The path to the authorization key file."
        },
        "build_tool_version": {
          "type": "string",
          "description": "The version of the Android Build Tools."
        },
        "keystore_password": {
          "type": "string",
          "description": "The keystore password."
        },
        "output_dir": {
          "type": "string",
          "description": "The directory in which the signed APK will be stored."
        },
        "key_alias": {
          "type": "string",
          "description": "The key alias name."
        },
        "key_password": {
          "type": "string",
          "description": "The key password."
        }
      },
      "required": [
        "action",
        "type",
        "local_path",
        "application_name",
        "key_path",
        "build_tool_version",
        "keystore_password"
      ],
      "additionalProperties": false
    },
    "SignBundle": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "ANDROID_SIGN_BUNDLE"
          ],
          "description": "The type of the action. Should be set to `ANDROID_SIGN_BUNDLE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "local_path": {
          "type": "string",
          "description": "The path to the generated .apk file."
        },
        "application_name": {
          "type": "string",
          "description": "The name of the signed APK file."
        },
        "key_path": {
          "type": "string",
          "description": "The path to the authorization key file."
        },
        "keystore_password": {
          "type": "string",
          "description": "The keystore password."
        },
        "output_dir": {
          "type": "string",
          "description": "The directory in which the signed APK will be stored."
        },
        "key_alias": {
          "type": "string",
          "description": "The key alias name."
        },
        "key_password": {
          "type": "string",
          "description": "The key password."
        }
      },
      "required": [
        "action",
        "type",
        "local_path",
        "application_name",
        "key_path",
        "keystore_password"
      ],
      "additionalProperties": false
    },
    "SlackNotification": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SLACK"
          ],
          "description": "The type of the action. Should be set to `SLACK`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "channel": {
          "type": "string",
          "description": "The ID of the Slack channel. More info [here](https://api.slack.com/types/channel)."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "content": {
          "type": "string",
          "description": "The content of the notification."
        },
        "attachments": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The array of the Slack message attachments. More info [here](https://api.slack.com/docs/message-attachments)."
        },
        "file_attachments": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The attached files."
        }
      },
      "required": [
        "action",
        "type",
        "channel",
        "integration",
        "content"
      ],
      "additionalProperties": false
    },
    "Sleep": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SLEEP"
          ],
          "description": "The type of the action. Should be set to `SLEEP`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "sleep_in_sec": {
          "type": "integer",
          "description": "The time (in seconds) to sleep. The value should be between 0 and 1200."
        }
      },
      "required": [
        "action",
        "type",
        "sleep_in_sec"
      ],
      "additionalProperties": false
    },
    "SMSNotification": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SMS"
          ],
          "description": "The type of the action. Should be set to `SMS`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "recipients": {
          "type": "string",
          "description": "The recipients of the notification: phone numbers (one per line)."
        },
        "content": {
          "type": "string",
          "description": "The content of the notification."
        }
      },
      "required": [
        "action",
        "type",
        "recipients",
        "content"
      ],
      "additionalProperties": false
    },
    "Snyk": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SNYK_CLI"
          ],
          "description": "The type of the action. Should be set to `SNYK_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        },
        "version": {
          "type": "string",
          "description": "Snyk version."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "SplitTests": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SPLIT_TESTS"
          ],
          "description": "The type of the action. Should be set to `SPLIT_TESTS`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "source_path": {
          "type": "string",
          "description": "The path in the filesystem containing files with tests."
        },
        "groups_count": {
          "type": "integer",
          "description": "The amount of groups to split. Can't be lower than 2."
        },
        "files_order": {
          "type": "string",
          "enum": [
            "BY_FILE_SIZE",
            "ALPHABETICALLY"
          ],
          "description": "Defines how test files should be split. Can be one of `BY_FILE_SIZE` or `ALPHABETICALLY`."
        }
      },
      "required": [
        "action",
        "type",
        "source_path",
        "groups_count"
      ],
      "additionalProperties": false
    },
    "SSHCommand": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SSH_COMMAND"
          ],
          "description": "The type of the action. Should be set to `SSH_COMMAND`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "authentication_mode": {
          "type": "string",
          "enum": [
            "PASS"
          ],
          "description": "The authentication mode for SSH. Should be set to `PASS`."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The array of commands invoked on the remote server."
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "run_as_script": {
          "type": "boolean",
          "description": "If set to `true`, commands are executed as a regular script. If set to false, the commands will be executed one by one, in non-interactive mode."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "working_directory": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "execute_every_command": {
          "type": "boolean",
          "description": "If set to `true` all commands will be executed regardless of the result of the previous command."
        }
      },
      "required": [
        "action",
        "type",
        "authentication_mode",
        "commands",
        "host",
        "login",
        "password",
        "port"
      ],
      "additionalProperties": false
    },
    "SSHToSandbox": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SANDBOX_EXEC"
          ],
          "description": "The type of the action. Must be set to `SANDBOX_EXEC`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "working_directory": {
          "type": "string",
          "description": "The absolute or relative path on the sandbox."
        },
        "user": {
          "type": "string",
          "description": "The name of the local (to the sandbox server) user who uploads the files."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The array of commands invoked on the sandbox."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell used to execute commands. Can be one of `BASH` (default) or `SH`."
        },
        "sandbox_references": {
          "type": "string",
          "description": "Defines the sandbox selection method. Available values: `BY_TAGS`, `BY_NAME`, `BY_PROJECT`, `BY_DAYS`, `BY_ID`, `BY_ACTION`."
        },
        "sandbox_id": {
          "type": "string",
          "description": "ID of the sandbox to which the files are uploaded. Required when `sandbox_references` is set to `BY_ID`."
        },
        "referenced_action_id": {
          "type": "integer",
          "description": "ID of the action that creates the target sandbox.Required when `sandbox_references` is set to `BY_ACTION`."
        },
        "referenced_sanbox_name": {
          "type": "string",
          "description": "Name of the target sandbox. Required when `sandbox_references` is set to `BY_NAME`."
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "List of tags applied to the target sandbox. Required when `sandbox_references` is set to `BY_TAGS`."
        },
        "sandbox_project_name": {
          "type": "string",
          "description": "Name of the project with the target sandbox. Required when `sandbox_references` is set to `BY_PROJECT`."
        },
        "days": {
          "type": "integer",
          "description": "Number of days passed since the creation of the target sandbox. One of `1`, `2`, `3`, `7`, `14`, `30`. Required when `sandbox_references` is set to `BY_DAYS`."
        },
        "execute_every_command": {
          "type": "boolean",
          "description": "If set to `true` all commands will be executed regardless of the result of the previous command."
        }
      },
      "required": [
        "action",
        "type",
        "commands",
        "sandbox_references"
      ],
      "additionalProperties": false
    },
    "SSLVerify": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "SSL_VERIFY"
          ],
          "description": "The type of the action. Should be set to `SSL_VERIFY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "website": {
          "type": "string",
          "description": "The URL of the website to be monitored."
        },
        "valid_for_days": {
          "type": "integer",
          "description": "Validation period for SSL certificate."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection. By default it is 443."
        }
      },
      "required": [
        "action",
        "type",
        "website",
        "valid_for_days"
      ],
      "additionalProperties": false
    },
    "StackHawkCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "STACK_HAWK_CLI"
          ],
          "description": "The type of the action. Should be set to `STACK_HAWK_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "integration"
      ],
      "additionalProperties": false
    },
    "SyncPath": {
      "type": "object",
      "properties": {
        "pipeline_path": {
          "type": "string"
        },
        "vm_path": {
          "type": "string"
        },
        "direction": {
          "type": "string",
          "enum": [
            "PIPELINE_TO_VM",
            "VM_TO_PIPELINE"
          ]
        },
        "excludes": {
          "type": "string"
        }
      },
      "required": [
        "pipeline_path",
        "vm_path",
        "direction",
        "excludes"
      ],
      "additionalProperties": false
    },
    "Tag": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "key",
        "value"
      ],
      "additionalProperties": false
    },
    "TCPMonitoring": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "TCP"
          ],
          "description": "The type of the action. Should be set to `TCP`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "destination": {
          "type": "string",
          "description": "The target URL."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "post_data": {
          "type": "string",
          "description": "The data that will be sent."
        },
        "text": {
          "type": "string",
          "description": "Text that should or should not be present in the response."
        }
      },
      "required": [
        "action",
        "type",
        "destination",
        "port"
      ],
      "additionalProperties": false
    },
    "TelegramNotification": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "TELEGRAM"
          ],
          "description": "The type of the action. Should be set to `TELEGRAM`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "content": {
          "type": "string",
          "description": "The content of the notification."
        },
        "file_attachments": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The attached files."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "content"
      ],
      "additionalProperties": false
    },
    "TerraformCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "TERRAFORM"
          ],
          "description": "The type of the action. Should be set to `TERRAFORM`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "execute_commands": {
          "type": "string",
          "description": "The commands that will be executed."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the Google or Amazon integration."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be `SH`."
        },
        "setup_commands": {
          "type": "string",
          "description": "The command that will be executed only on the first run."
        },
        "version": {
          "type": "string",
          "description": "The version of the Terraform CLI."
        }
      },
      "required": [
        "action",
        "type",
        "execute_commands",
        "version"
      ],
      "additionalProperties": false
    },
    "TransferToSandbox": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "DEPLOY_TO_SANDBOX"
          ],
          "description": "The type of the action. Must be set to `DEPLOY_TO_SANDBOX`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are uploaded from the repository or from the pipeline filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The source path of the files to be uploaded."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the sandbox where the files are uploaded."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that excluded from the upload."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        },
        "use_temporary_files": {
          "type": "boolean",
          "description": "The files will be uploaded with a \"tmp\" suffix that will be removed once the upload has finished."
        },
        "deletion_disabled": {
          "type": "boolean",
          "description": "When set to `false`, deletes files on the server that were deleted between revisions."
        },
        "user": {
          "type": "string",
          "description": "The name of the local (to the sandbox server) user who uploads the files."
        },
        "sandbox_references": {
          "type": "string",
          "description": "Defines the sandbox selection method. Available values: `BY_TAGS`, `BY_NAME`, `BY_PROJECT`, `BY_DAYS`, `BY_ID`, `BY_ACTION`."
        },
        "sandbox_id": {
          "type": "string",
          "description": "ID of the sandbox to which the files are uploaded. Required when `sandbox_references` is set to `BY_ID`."
        },
        "referenced_action_id": {
          "type": "integer",
          "description": "ID of the action that creates the target sandbox.Required when `sandbox_references` is set to `BY_ACTION`."
        },
        "referenced_sanbox_name": {
          "type": "string",
          "description": "Name of the target sandbox. Required when `sandbox_references` is set to `BY_NAME`."
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "List of tags applied to the target sandbox. Required when `sandbox_references` is set to `BY_TAGS`."
        },
        "sandbox_project_name": {
          "type": "string",
          "description": "Name of the project with the target sandbox. Required when `sandbox_references` is set to `BY_PROJECT`."
        },
        "days": {
          "type": "integer",
          "description": "Number of days passed since the creation of the target sandbox. One of `1`, `2`, `3`, `7`, `14`, `30`. Required when `sandbox_references` is set to `BY_DAYS`."
        }
      },
      "required": [
        "action",
        "type",
        "sandbox_references"
      ],
      "additionalProperties": false
    },
    "TriggerCondition": {
      "type": "object",
      "properties": {
        "trigger_condition": {
          "type": "string",
          "enum": [
            "ON_CHANGE",
            "OR",
            "ON_CHANGE_AT_PATH",
            "VAR_IS",
            "VAR_IS_NOT",
            "VAR_CONTAINS",
            "VAR_NOT_CONTAINS",
            "VAR_LESS_THAN",
            "VAR_LESS_THAN_OR_EQUAL",
            "VAR_GREATER_THAN",
            "VAR_GREATER_THAN_OR_EQUAL",
            "DAY",
            "HOUR",
            "TRIGGERING_USER_IS",
            "TRIGGERING_USER_IS_NOT",
            "TRIGGERING_USER_IS_IN_GROUP",
            "TRIGGERING_USER_IS_NOT_IN_GROUP",
            "SUCCESS_PIPELINE"
          ],
          "description": "Defines when the action should be run. Can be one of `ON_CHANGE`, `OR`, `ON_CHANGE_AT_PATH`, `VAR_IS`, `VAR_IS_NOT`, `VAR_CONTAINS`, `VAR_NOT_CONTAINS`, `VAR_LESS_THAN`, `VAR_LESS_THAN_OR_EQUAL`, `VAR_GREATER_THAN`, `VAR_GREATER_THAN_OR_EQUAL`, `DAY`, `HOUR`, `TRIGGERING_USER_IS`, `TRIGGERING_USER_IS_NOT`, `TRIGGERING_USER_IS_IN_GROUP`, `TRIGGERING_USER_IS_NOT_IN_GROUP`, or `SUCCESS_PIPELINE`, `ACTION_STATUS_IS` or `ACTION_STATUS_IS_NOT` (last two can only be set in the action)."
        },
        "trigger_condition_paths": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Required when 'trigger_condition' is set to `ON_CHANGE_AT_PATH`."
        },
        "trigger_variable_key": {
          "type": "string",
          "description": "Required when 'trigger_condition' is set to `VAR_IS`, `VAR_IS_NOT` or `VAR_CONTAINS` or `VAR_NOT_CONTAINS`, `VAR_LESS_THAN`, `VAR_LESS_THAN_OR_EQUAL`, `VAR_GREATER_THAN`, `VAR_GREATER_THAN_OR_EQUAL`. Defines the name of the desired variable."
        },
        "trigger_variable_value": {
          "type": "string",
          "description": "Required when 'trigger_condition' is set to `VAR_IS`, `VAR_IS_NOT` or `VAR_CONTAINS` or `VAR_NOT_CONTAINS`, `VAR_LESS_THAN`, `VAR_LESS_THAN_OR_EQUAL`, `VAR_GREATER_THAN`, `VAR_GREATER_THAN_OR_EQUAL`. Defines the value of the desired variable which will be compared with its current value."
        },
        "trigger_hours": {
          "type": "array",
          "items": {
            "type": "integer"
          },
          "description": "Available when `trigger_condition` is set to `HOUR`. Defines the time – by default running from 1 to 24."
        },
        "trigger_days": {
          "type": "array",
          "items": {
            "type": "integer"
          },
          "description": "Available when `trigger_condition` is set to `DAY`. Defines the days running from 1 to 7 where 1 is for Monday."
        },
        "zone_id": {
          "type": "string",
          "description": "Available when `trigger_condition` is set to `DAY` or `HOUR`. Defines the timezone (by default it is UTC) and takes values from [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)."
        },
        "trigger_project_name": {
          "type": "string",
          "description": "Required when `trigger_condition` is set to `SUCCESS_PIPELINE`. Defines the name of the project in which the `trigger_pipeline_name` is."
        },
        "trigger_pipeline_name": {
          "type": "string",
          "description": "Required when `trigger_condition` is set to `SUCCESS_PIPELINE`. Defines the name of the pipeline."
        },
        "trigger_action_name": {
          "type": "string",
          "description": "Required when `trigger_condition` is set to 'ACTION_STATUS_IS' or `ACTION_STATUS_IS_NOT`. Defines the name of the action."
        },
        "trigger_status": {
          "type": "string",
          "enum": [
            "SUCCESSFUL",
            "SKIPPED",
            "SUPRESSED",
            "FAILED"
          ],
          "description": "Required when `trigger_condition` is set to `ACTION_STATUS_IS` or `ACTION_STATUS_IS_NOT`. Defines the status that the action should or shouldn't have. Can be one of 'SUCCESSFUL', 'SKIPPED', 'SUPRESSED' or 'FAILED'."
        },
        "trigger_user": {
          "type": "string",
          "description": "Required when `trigger_condition` is set to `TRIGGERING_USER_IS` or `TRIGGERING_USER_IS_NOT`. Defines the email address of the user."
        },
        "trigger_group": {
          "type": "string",
          "description": "Required when `trigger_condition` is set to `TRIGGERING_USER_IS_IN_GROUP` or `TRIGGERING_USER_IS_NOT_IN_GROUP`. Defines the name of the group."
        }
      },
      "additionalProperties": false
    },
    "TriggerPipeline": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "RUN_NEXT_PIPELINE"
          ],
          "description": "The type of the action. Should be set to `RUN_NEXT_PIPELINE`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "next_pipeline_id": {
          "type": "integer",
          "description": "The ID of the pipeline that will be triggered. Not required if both `next_project_name` and `next_pipeline_name` are set instead."
        },
        "next_project_name": {
          "type": "string",
          "description": "The name of the project containing the pipeline that will be triggered. Not required if `next_pipeline_id` is set instead."
        },
        "next_pipeline_name": {
          "type": "string",
          "description": "The name of the pipeline that will be triggered. Not required if `next_pipeline_id` is set instead."
        },
        "comment": {
          "type": "string",
          "description": "The execution comment of the triggered pipeline."
        },
        "revision": {
          "type": "string",
          "enum": [
            "HEAD",
            "INHERIT",
            "SPECIFIC"
          ],
          "description": "Can be one of `HEAD`, `INHERIT`or `SPECIFIC`. Default is `HEAD`."
        },
        "specific_revision": {
          "type": "string",
          "description": "Set if you want to run the pipeline for a specific revision or ref."
        },
        "clear_cache": {
          "type": "boolean",
          "description": "Set to `true` if you want the execution to run with the `clear_cache` flag. Default is `false`."
        },
        "refresh": {
          "type": "boolean",
          "description": "Set to `true` if you want the execution to run from scratch. Default is `false`."
        },
        "priority": {
          "type": "string",
          "enum": [
            "LOW",
            "NORMAL",
            "HIGH"
          ],
          "description": "Set if you want the execution to run with priority other than set in the next pipeline. Can be one of `LOW`, `NORMAL` or `HIGH`."
        },
        "wait": {
          "type": "boolean"
        }
      },
      "required": [
        "action",
        "type"
      ],
      "additionalProperties": false
    },
    "UpCloud": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "UPCLOUD"
          ],
          "description": "The type of the action. Should be set to `UPCLOUD`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "authentication_mode": {
          "type": "string",
          "enum": [
            "PASS"
          ],
          "description": "The authentication mode for SSH. Should be set to `PASS`."
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "host_name": {
          "type": "string",
          "description": "The hostname of the UpCloud server."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "authentication_mode",
        "host",
        "host_name",
        "login",
        "password",
        "port"
      ],
      "additionalProperties": false
    },
    "Variable": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string",
          "description": "The name of the variable."
        },
        "value": {
          "type": "string",
          "description": "The value of the variable. If the 'type' is `FILE`, the value must be Base64 encoded."
        },
        "type": {
          "type": "string",
          "enum": [
            "VAR",
            "SSH_KEY",
            "FILE"
          ],
          "description": "The type of the added variable. Can be one of `VAR`, `SSH_KEY` or `FILE`."
        },
        "description": {
          "type": "string",
          "description": "The optional description of the variable."
        },
        "encrypted": {
          "type": "boolean",
          "description": "When set to 'true' the variable value will be encrypted and hidden."
        },
        "settable": {
          "type": "boolean",
          "description": "When set to 'true' the variable value can be shifted between subsequent actions or executions as well as pipelines."
        },
        "file_place": {
          "type": "string",
          "description": "Available values: `CONTAINER`, `NONE`. Set if type is `SSH_KEY` or `FILE`. If it's `NONE`, the variable can be used as a parameter in an action. For `CONTAINER`, the given file/key is additionally copied to an action container on each run."
        },
        "file_path": {
          "type": "string",
          "description": "Specifies where to copy the file on each run. Set if `type` is `SSH_KEY` or `FILE`."
        },
        "file_chmod": {
          "type": "string",
          "description": "File permission set on copy to a container on each run. Set if `type` is `SSH_KEY` or `FILE`."
        }
      },
      "required": [
        "key",
        "value"
      ],
      "additionalProperties": false
    },
    "VisualTests": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "VISUAL_TESTS"
          ],
          "description": "The type of the action. Should be set to `VISUAL_TESTS`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "browser_type": {
          "type": "string",
          "enum": [
            "CHROME",
            "FIREFOX"
          ],
          "description": "Defines which browser will be used in tests. Can be one of `CHROME` or `FIREFOX`."
        },
        "resolution_width": {
          "type": "integer",
          "description": "Resolution width."
        },
        "resolution_height": {
          "type": "integer",
          "description": "Resolution height."
        },
        "pixel_tolerance_level": {
          "type": "number",
          "description": "The acceptable level of pixel tolerance. Allowed number of decimal places is two."
        },
        "images_history_limit": {
          "type": "integer",
          "description": "The number of items that should be kept in history."
        },
        "screenshots": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Screenshot"
          },
          "description": "Defines the URLs of the sites that will be tested. Contains information about baseline, headers and excluded areas."
        },
        "headers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Header"
          },
          "description": "The headers that will be sent with the request."
        },
        "permissions": {
          "oneOf": [
            {
              "$ref": "#/definitions/Permission"
            }
          ],
          "description": "Define to set permissions for the action."
        }
      },
      "required": [
        "action",
        "type",
        "browser_type",
        "resolution_width",
        "resolution_height",
        "pixel_tolerance_level",
        "images_history_limit",
        "screenshots"
      ],
      "additionalProperties": false
    },
    "Vultr": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "VULTR"
          ],
          "description": "The type of the action. Should be set to `VULTR`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "authentication_mode": {
          "type": "string",
          "enum": [
            "PASS"
          ],
          "description": "The authentication mode for SSH. Should be set to `PASS`."
        },
        "host": {
          "type": "string",
          "description": "The host for the connection."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "authentication_mode",
        "host",
        "login",
        "port",
        "integration"
      ],
      "additionalProperties": false
    },
    "WaitForApproval": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "WAIT_FOR_APPLY"
          ],
          "description": "The type of the action. Should be set to `WAIT_FOR_APPLY`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "comment": {
          "type": "string",
          "description": "The question displayed before accepting to continue the execution."
        },
        "permissions": {
          "oneOf": [
            {
              "$ref": "#/definitions/Permission"
            }
          ],
          "description": "Define to set permissions for the action."
        }
      },
      "required": [
        "action",
        "type"
      ],
      "additionalProperties": false
    },
    "WebDAV": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "WEB_DAV"
          ],
          "description": "The type of the action. Should be set to `WEB_DAV`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "web_dav_url": {
          "type": "string",
          "description": "The URL to your WebDAV server."
        },
        "input_type": {
          "type": "string",
          "enum": [
            "SCM_REPOSITORY",
            "BUILD_ARTIFACTS"
          ],
          "description": "Defines whether the files are deployed from the repository or from the build filesystem. Can be one of `SCM_REPOSITORY` or `BUILD_ARTIFACTS`."
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "remote_path": {
          "type": "string",
          "description": "The absolute or relative path on the remote server."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "login",
        "password",
        "web_dav_url"
      ],
      "additionalProperties": false
    },
    "WebMonitoring": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "WEB"
          ],
          "description": "The type of the action. Should be set to `WEB`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "destination": {
          "type": "string",
          "description": "The target URL."
        },
        "headers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Header"
          },
          "description": "The headers that will be sent with the request."
        },
        "login": {
          "type": "string",
          "description": "The username required to connect to the server."
        },
        "password": {
          "type": "string",
          "description": "The password required to connect to the server."
        },
        "port": {
          "type": "string",
          "description": "The port for the connection."
        },
        "post_data": {
          "type": "string",
          "description": "The data that will be sent."
        },
        "text": {
          "type": "string",
          "description": "The text that should or should not be present in the response."
        },
        "text_existence": {
          "type": "boolean",
          "description": "Defines whether the response should or should not contain given text. If set, the `text` argument is required."
        }
      },
      "required": [
        "action",
        "type",
        "destination"
      ],
      "additionalProperties": false
    },
    "Windows": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_WINDOWS"
          ],
          "description": "The type of the action. Should be set to `NATIVE_BUILD_WINDOWS`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "working_directory": {
          "type": "string",
          "description": "The directory in which the pipeline filesystem will be mounted."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "execute_every_command": {
          "type": "boolean",
          "description": "If set to `true` all commands will be executed regardless of the result of the previous command."
        },
        "sync_paths": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SyncPath"
          },
          "description": "Define file paths that should be copied before `PIPELINE_TO_VM` and after the execution `VM_TO_PIPELINE`."
        },
        "vm_from_prev_action": {
          "type": "boolean",
          "description": "Set to `true` if you want the action to use the VM from the previous Windows action."
        },
        "vm_action_name": {
          "type": "string",
          "description": "The name of the action from which the VM is reused (if `vm_from_prev_action` is set to `true`). If not set, the previous one will be used."
        },
        "distribution": {
          "type": "string",
          "description": "Defines the image used to create the VM. Use `WINDOWS_SERVER_2019` for the default image, `AMI` for a custom `AMI`."
        },
        "ami": {
          "oneOf": [
            {
              "$ref": "#/definitions/Ami"
            }
          ],
          "description": "Set if `distribution` is set to `AMI`."
        }
      },
      "required": [
        "action",
        "type",
        "working_directory",
        "commands"
      ],
      "additionalProperties": false
    },
    "WPCLI": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "WP_CLI"
          ],
          "description": "The type of the action. Should be set to `WP_CLI`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "integration": {
          "type": "string",
          "description": "The ID of the integration."
        },
        "execute_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "version": {
          "type": "string",
          "description": "The version of the WordPress CLI."
        },
        "shell": {
          "type": "string",
          "description": "The name of the shell that will be used to execute commands. Can be one of `SH` (default) or `BASH`."
        },
        "setup_commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The command that will be executed only on the first run."
        },
        "config": {
          "type": "string",
          "description": "The WP CLI config set as text."
        },
        "env_key": {
          "type": "string",
          "description": "The WP CLI config set as asset."
        }
      },
      "required": [
        "action",
        "type",
        "integration",
        "execute_commands",
        "version"
      ],
      "additionalProperties": false
    },
    "Xcode": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The ID of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "NATIVE_BUILD_MAC"
          ],
          "description": "The type of the action. Should be set to `NATIVE_BUILD_MAC`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "working_directory": {
          "type": "string",
          "description": "The directory in which the pipeline filesystem will be mounted."
        },
        "commands": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The commands that will be executed."
        },
        "image": {
          "type": "string",
          "description": "The Xcode version for the action. Available values: `11.7`, `10.3`, `12.1`, `12.2`, `12`."
        },
        "execute_every_command": {
          "type": "boolean",
          "description": "If set to `true` all commands will be executed regardless of the result of the previous command."
        },
        "sync_paths": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SyncPath"
          },
          "description": "Define file paths that should be copied before `PIPELINE_TO_VM` and after the execution `VM_TO_PIPELINE`."
        },
        "preStartSimulators": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "A series of simulators to be launched before the action starts. Available values: `iPad (7th generation)`,`iPad (9th generation)`, `iPad Air (3rd generation)`, `iPad Air (4th generation)`, `iPad Air (5th generation)`, `iPad Pro (11-inch) (2nd generation)`,`iPad Pro (11-inch) (3rd generation)`,`iPad Pro (12.9-inch) (4th generation)`,`iPad Pro (12.9-inch) (5th generation)`, `iPad Pro (9.7-inch)`, `iPad mini (6th generation)`, `iPhone 11`, `iPhone 11 Pro`, `iPhone 11 Pro Max`, `iPhone 12`, `iPhone 12 Pro`, `iPhone 12 Pro Max`, `iPhone 12 mini`, `iPhone 13`, `Phone 13 Pro`, `iPhone 13 Pro Max`, `iPhone 13 mini`, `iPhone 14`, `iPhone 14 Plus`, `iPhone 14 Pro`, `iPhone 14 Pro Max`, `iPhone 8`, `iPhone 8 Plus`, `iPhone SE (2nd generation)`, `iPhone SE (3rd generation)`"
        }
      },
      "required": [
        "action",
        "type",
        "working_directory",
        "commands",
        "image"
      ],
      "additionalProperties": false
    },
    "ZIP": {
      "type": "object",
      "properties": {
        "action": {
          "type": "string",
          "description": "The name of the action."
        },
        "type": {
          "type": "string",
          "enum": [
            "ZIP"
          ],
          "description": "The type of the action. Should be set to `ZIP`."
        },
        "variables": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Variable"
          },
          "description": "[The list of variables](https://buddy.works/docs/yaml/yaml-schema#variables-schema) you can use the action."
        },
        "trigger_conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TriggerCondition"
          },
          "description": "[The list of trigger conditions](https://buddy.works/docs/yaml/yaml-schema#trigger-condition-schema) to meet so that the action can be triggered."
        },
        "timeout": {
          "type": "integer",
          "description": "The timeout in seconds."
        },
        "disabled": {
          "type": "boolean",
          "description": "When set to 'true' the action is disabled.  By default it is set to `false`."
        },
        "run_next": {
          "type": "string",
          "description": "Defines whether the action should run in parallel with the next one.  Possible values: `WAIT_ON_SUCCESS`(no parallel), `IN_SOFT_PARALLEL`(run as soon as a runner is available), `IN_HARD_PARALLEL`(run only with enough runners). The default value is `ON_EVERY_EXECUTION`"
        },
        "run_only_on_first_failure": {
          "type": "boolean",
          "description": "Defines whether the action should be executed on each failure. Restricted to and required if the 'trigger_time' is `ON_FAILURE`."
        },
        "ignore_errors": {
          "type": "boolean",
          "description": "If set to 'true' the execution will proceed, mark action as a warning and jump to the next action. Doesn't apply to deployment actions."
        },
        "retry_interval": {
          "type": "integer",
          "description": "Delay time between auto retries in seconds."
        },
        "retry_count": {
          "type": "integer",
          "description": "Number of retries if the action fails."
        },
        "trigger_time": {
          "type": "string",
          "enum": [
            "ON_EVERY_EXECUTION",
            "ON_FAILURE",
            "ON_BACK_TO_SUCCESS",
            "ON_WARNING",
            "ON_WAIT_FOR_APPROVE"
          ],
          "default": "ON_EVERY_EXECUTION",
          "description": "Specifies when the action should be executed. Can be one of `ON_EVERY_EXECUTION`, `ON_FAILURE`, `ON_BACK_TO_SUCCESS`, `ON_WARNING` or `ON_WAIT_FOR_APPROVE`. The default value is `ON_EVERY_EXECUTION`.\n\n@default \"ON_EVERY_EXECUTION\""
        },
        "local_path": {
          "type": "string",
          "description": "The path in the repository."
        },
        "destination": {
          "type": "string",
          "description": "The target path."
        },
        "deployment_excludes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The paths and/or files that will be left out during the deployment."
        },
        "deployment_includes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "The exceptions from the ignore patterns set in `deployment_excludes`."
        }
      },
      "required": [
        "action",
        "type",
        "local_path",
        "destination"
      ],
      "additionalProperties": false
    }
  }
};